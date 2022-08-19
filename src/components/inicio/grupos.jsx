import React, {useEffect, useState} from "react";
import { getGrupos } from "../service/grupoService";
import Paises from "./paises";

export default function Grupos() {

    const [gruposData, setGruposData] = useState([]);

    // Información al cargar el componente
    useEffect(() => {
        setGruposData(getGrupos());
    }, []);
    
    const grupos = gruposData.map((data) => {
        return (
            <div className="w-1/2 m-5">
                <h2 className="text-2xl font-extrabold bg-rose-900 rounded-md text-center text-white">{data.val().nombre}</h2>
                <Paises grupo={data.key}/>
            </div>    
        ) ;       
    });
    
    return (

        <div className="grid gap-4 grid-cols-4 grid-rows-2">
            {grupos}
        </div>        

    );

}

