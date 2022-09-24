import React from 'react';
import Navbar from './Navbar';
import Sede from './Sede';
import Paises from './Paises';
import Grupos from './Grupos';

const Home = () => {
    return (
        <>
        <Navbar />
        <Sede />
        <Paises />
        <Grupos />
        </>
    );
};

export default Home;