import React, {useState} from 'react';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


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
                    <button className='px-8 py-3 bg-transparent text-black mr-4 hover:bg-transparent hover:text-black'>
                        Login
                    </button>
                    <button className='px-8 py-3'>
                        Registrarme
                    </button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <HiMenu className='w-5' /> : <HiOutlineX className='w-5' />}
                    
                </div>
            </div>
            <ul className="absolute bg-zinc-200 w-full px-8">
                <li className='border-b-2 border-zinc-300 w-full'>Inicio</li>
                <li className='border-b-2 border-zinc-300 w-full'>Países</li>
                <li className='border-b-2 border-zinc-300 w-full'>Grupos</li>
                <li className='border-b-2 border-zinc-300 w-full'>Estadios</li>
                <li className='border-b-2 border-zinc-300 w-full'>Calendarios</li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-black px-8 py-3 mb-4 hover:bg-transparent hover:text-black">
                        Login
                    </button>
                    <button className='px-8 py-3'>
                        Registrarme
                    </button>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;