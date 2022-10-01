import React from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Body from "./InicioBanner/body";
import Login from "./login/Login";
import Registro from "./login/Registro";
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/old" element={<Body />} />
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default AnimatedRoutes;