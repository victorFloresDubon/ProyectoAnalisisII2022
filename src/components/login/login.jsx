import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiLogin, HiUserCircle } from 'react-icons/hi';
import authService from '../../service/auth.service';

const Login = () => {

    const [usuarioActual, setUsuarioActual] = useState({});
    useEffect(() => {
        let usuario = authService.getUsuarioActual();
        if (usuario) {
            setUsuarioActual(usuario);
        }
    })

    const logout = () => {
        authService.logout();
    }


    return (
        <div className="w-full h-screen bg-zinc-200 dark:bg-gray-900 justify-center flex flex-col">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 
                dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex flex-col text-center items-center">
                            <HiUserCircle className='w-10 h-10' />
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Inicio de Sesión
                            </h1>
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Tu correo electrónico
                                </label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Contraseña
                                </label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordarme</label>
                                    </div>
                                </div>
                                {/*<a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">¿Olvidaste tu contraseña?</a>*/}
                            </div>
                            <button type="submit" className="w-full focus:ring-4 focus:outline-none 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center text-yellow-50 border bg-qatar4 border-qatar4 
                            hover:bg-brightqatar4 hover:text-yellow-50 flex justify-center items-center">
                                <HiLogin className='w-10 h-5' />
                                Iniciar sesión
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿No tienes cuenta aún? {/*<a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</a>*/}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;