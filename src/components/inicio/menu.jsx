import React from "react";

export default function Menu(){
    return (
      <nav className="relative container mx-auto p-6 bg-gradient-to-r from-qatar1 via-qatar2 to-qatar3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
          </div>
          {/* Opciones del menú */}
          <div className="hidden md:flex space-x-6">
            <a href="#">Países</a>
            <a href="#">Grupos</a>
            <a href="#">Calendarios</a>
          </div>
          {/* Iniciar sesión */}
          <a href="/login" className="hidden md:block p-3 px-6 pt-2 text-white bg-qatar4 rounded-full 
          baseline hover:bg-brightqatar4">
            Iniciar Sesión
          </a>
        </div>
      </nav>
    );
}