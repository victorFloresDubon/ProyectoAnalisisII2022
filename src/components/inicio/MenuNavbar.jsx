import React from 'react';

function MenuNavbar() {
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4 sm:text-4xl">
                        QATAR 2022
                    </h1>
                    <ul className="hidden md:flex">
                        <li>Inicio</li>
                        <li>Países</li>
                        <li>Grupos</li>
                        <li>Estadios</li>
                        <li>Calendarios</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className='border-none bg-transparent text-black mr-4 hover:bg-transparent hover:text-black'>
                        Login
                    </button>
                    <button className='px-8 py-3'>Registrarme</button>
                </div>
                <div className="md:hidden">

                </div>
            </div>
        </div>
    );
}

export default MenuNavbar;