import React, { useEffect, useState } from "react";
import { getPaisesByGrupo } from "../service/paisService";

export default function Paises(grupo) {

    const [paisesData, setPaisesData] = useState([]);

    useEffect(() => {
        setPaisesData(getPaisesByGrupo(grupo));
    }, []);

    const paises = paisesData.map((data) => {
        return (
            <ul>
                <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold">
                    <img src={data.img} alt={data.nombre} />
                    {data.nombre}
                </li>
            </ul>

        );
    });

    return (
        {paises}
    );
}