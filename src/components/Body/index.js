import React from "react"
import Grupos from "../Grupos"

export default function Body(){
    return(
        <div className="flex flex-row">
            <div className="w-1/2 m-5">
                <h2 className="text-5xl">Te presentamos el mejor sitio de apuestas</h2>
                <p className="text-xl p-2">Aqui encontraras información sobre tus equipos favoritos, fechas y resultados, podrás participar
                en trivias, sorteos y apuestas. Vota por tu equipo favorito y gana miles de dólares!
                </p>
                <p className="text-xl p-2">Haz clik en el botón de iniciar para registrarte y empezar a participar.</p>
            </div>
            <div className="w-1/2 m-5">
                <img className="w-auto" src="https://123161-352384-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/12/hacer-apuestas-Puerto-Rico.jpg"/>
            </div>
        </div>
    )
}