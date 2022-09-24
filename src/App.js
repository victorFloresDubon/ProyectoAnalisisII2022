import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/InicioBanner/body";
import Login from "./components/login/Login";
import Registro from "./components/login/Registro";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/old" element={<Body />} />
      </Routes>
    </>
  );
}

export default App;