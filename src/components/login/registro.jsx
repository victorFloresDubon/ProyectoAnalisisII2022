import React from 'react';
import { HiLogin, HiUserCircle } from 'react-icons/hi'

const Registro = () => {
    return (
        <div className="w-full h-screen bg-zinc-200 dark:bg-gray-900 justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <HiUserCircle className='w-10 h-10' />
                <h1 className="py-3 text-3xl md:text-4xl font-bold">
                    Crear mi cuenta
                </h1>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 
                dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Crea tu nueva cuenta
                        </h1>
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
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirmar contraseña
                                </label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" className="w-full focus:ring-4 focus:outline-none 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center text-yellow-50 border bg-qatar4 border-qatar4 
                            hover:bg-brightqatar4 hover:text-yellow-50 flex justify-center items-center">
                                <HiLogin className='w-10 h-5' />
                                Registrarme
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;