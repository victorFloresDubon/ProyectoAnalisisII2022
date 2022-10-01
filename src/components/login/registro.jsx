import React from 'react';
import { HiLogin, HiUserCircle } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import usuarioService from '../service/usuario.service';
import cloudynaryService from '../service/cloudinary.service';
import Swal from 'sweetalert2';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

const Registro = () => {

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();

    const [estado, setEstado] = useState({
        mensaje: '',
        successful: true
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg']
        },
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setValue("file", acceptedFiles[0]);
            setFiles(acceptedFiles.map((file) => {
                //                setValue("file", file);
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                });
            }));
        }
    });

    //console.log(errors);

    const handleNombreValidation = email => {
        return isEmail(email);
    }

    const thumbs = files.map((file) => {
        return (
            <div className="thumb" key={file.name}>
                <div className="thumbInner">
                    <img src={file.preview} className="img" alt={file.name}
                        // Revoca la URI después de que la imagen es cargada
                        onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    />
                </div>
            </div>
        )
    });

    const mostrarAlertaError = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: estado.mensaje,
            confirmButtonText: "Ok, entiendo",
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutUp'
            }
        })
    };

    const mostrarAlertaRegistroUsuario = () => {
        Swal.fire({
            icon: 'success',
            title: 'Cuenta creada!',
            text: "Usuario registrado exitosamente!",
            showConfirmButton: false,
            timer: 2000,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
            }
        })
    }

    const onSubmit = data => {
        console.log(data);
        usuarioService.signUp(data.nombre, data.password, data.confpwd)
            .then((res) => {
                if (res.status === 200) {
                    usuarioService
                        .getIdByNombre(data.nombre)
                        .then((res) => {
                            console.log(res);
                            cloudynaryService
                                .upload(res.data, data.file)
                                .then((res) => {
                                    console.log(res);
                                    mostrarAlertaRegistroUsuario();
                                    // Direcciona a la página de login
                                    navigate("/login");
                                })
                                .catch((err) => {
                                    console.log(err);
                                    setEstado({
                                        mensaje: "Algo salió mal! No se pudo cargar tu foto de perfil, intenta nuevamente...",
                                        successful: false
                                    })
                                })
                        })
                        .catch((err) => {
                            console.log(err);
                            setEstado({
                                mensaje: 'Algo salió mal! Por favor, intenta nuevamente...',
                                successful: false
                            })
                        });
                }
            })
            .catch((err) => {
                if (err.response.data?.mensaje) {
                    setEstado({
                        mensaje: err.response.data?.mensaje,
                        successful: false
                    });
                    console.log(estado.mensaje);
                    mostrarAlertaError();
                }
            });

    }

    return (
        <motion.div className="w-full h-screen bg-zinc-200 dark:bg-gray-900 justify-center"
        initial={{width: 0}}
        animate={{ width: "100%"}}
        exit={{ x: window.innerWidth, transition: {duration: 0.1}}}        
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 
                dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className='flex flex-col text-center items-center'>
                            <HiUserCircle className='w-10 h-10' />
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Crea tu nueva cuenta
                            </h1>
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)} >
                            <div>
                                <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Tu correo electrónico
                                </label>
                                <input type="email" {...register("nombre", {
                                    required: "Debe proporcionar un correo electrónico",
                                    validate: handleNombreValidation
                                })}
                                    id="email" className={errors.nombre?.message ? `input-required focus:ring-primary-600 focus:border-primary-600 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`:
                                        `bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    placeholder="name@company.com" required="" />
                                <p className='text-brightqatar4'>{errors.nombre?.message}</p>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Contraseña
                                </label>
                                <input type="password" {...register("password", {
                                    required: "Contraseña requerida",
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                                        message: "Debe contener al menos un dígito, una letra mayúscula"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener mínimo 8 dígitos"
                                    }
                                })}
                                    id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                                {errors.password && <p className="text-brightqatar4">{errors.password?.message}</p>}

                            </div>
                            <div>
                                <label htmlFor="confpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirmar contraseña
                                </label>
                                <input type="password" {...register("confpwd", {
                                    required: true,
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                                        message: "Debe contener al menos un dígito, una letra mayúscula"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener mínimo 8 dígitos"
                                    },
                                    validate: {
                                        passwordEquals: v => v === getValues("password") || "La contraseña ingresada no coincide"
                                    }
                                })
                                } id="confpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 
                                sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                                {errors.confpwd && <p className="text-brightqatar4">{errors.confpwd?.message}</p>}
                            </div>
                            <div {...getRootProps({ className: "dropzone" })}>
                                <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Aquí va tu foto de perfil
                                </label>
                                <input {...getInputProps()} />
                                <p>Suelta tu foto aquí</p>
                            </div>
                            <aside className='px-36'>
                                {thumbs}
                            </aside>
                            <button className="w-full focus:ring-4 focus:outline-none 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center text-yellow-50 border bg-qatar4 border-qatar4 
                            hover:bg-brightqatar4 hover:text-yellow-50 flex justify-center items-center">
                                <HiLogin className='w-10 h-5' />
                                Registrarme
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default Registro;