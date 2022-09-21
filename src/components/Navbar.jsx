import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link  as lnk} from 'react-router-dom';

import {
    HiOutlineX,
    HiOutlineUserCircle,
    HiLogin,
    HiUserGroup,
    HiOutlineOfficeBuilding
} from 'react-icons/hi';

import {
    FcMenu,
    FcHome,
    FcCalendar,
    FcGlobe
} from 'react-icons/fc';
import logo from "../img/qatar2022.svg";

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <Link to='home' smooth={true} duration={500}>
                        <img src={logo} alt="qatar2022" className='h-12' />
                    </Link>
                    <ul className="hidden md:flex">
                        <li className='flex justify-center items-center'>
                            <FcHome className='w-10' />
                            <Link to='home' smooth={true} duration={500}>
                                Inicio
                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                            <FcGlobe className='w-10' />
                            <Link to='paises' smooth={true} duration={500}>
                                Países
                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                            <HiUserGroup className='w-10' />
                            <Link to='grupos' smooth={true} duration={500}>
                                Grupos
                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                            <HiUserGroup className='w-10' />
                            <Link to='estadios' smooth={true} duration={500}>
                                Estadios
                            </Link>
                        </li>
                        <li className='flex justify-center items-center'>
                            <FcCalendar className='w-10' />
                            <Link to='calendarios' smooth={true} duration={500}>
                                Calendarios
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className='px-8 py-3 bg-transparent text-black mr-4 hover:bg-transparent
                     hover:text-black flex items-center justify-center'>
                        Login
                        <HiLogin className='w-5' />
                    </button>
                    <button className='px-8 py-3 flex justify-center items-center'>
                        <HiOutlineUserCircle className='w-5' />
                        Registrarme
                    </button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <FcMenu className='w-6' /> : <HiOutlineX className='w-5' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden md:hidden' : "absolute bg-zinc-200 w-full px-8"}>
                <li className='border-b-2 border-zinc-300 w-full flex justify-center items-center'>
                    <FcHome className='w-10' />
                    <Link onClick={handleClose} to="home" smooth={true} duration={500}>
                        Inicio
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full flex justify-center items-center'>
                    <FcGlobe className='w-10' />
                    <Link onClick={handleClose} to="paises" smooth={true} offset={-200} duration={500}>
                        Países
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full flex justify-center items-center'>
                    <HiUserGroup className='w-10' />
                    <Link onClick={handleClose} to="grupos" smooth={true} offset={-50} duration={500}>
                        Grupos
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full flex justify-center items-center'>
                    <HiOutlineOfficeBuilding className='w-10' />
                    <Link onClick={handleClose} to="estadios" smooth={true} offset={-100} duration={500}>
                        Estadios
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full flex justify-center items-center'>
                    <FcCalendar className='w-10' />
                    <Link onClick={handleClose} to="calendarios" smooth={true} offset={-50} duration={500}>
                        Calendarios
                    </Link>
                </li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-black px-8 py-3 mb-4 
                    hover:bg-transparent hover:text-black flex justify-center items-center">
                        <lnk>Login</lnk>
                        <HiLogin className='w-8' />
                    </button>
                    <button className='px-8 py-3 flex justify-center items-center'>
                        <HiOutlineUserCircle className='w-8' />
                        Registrarme
                    </button>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;