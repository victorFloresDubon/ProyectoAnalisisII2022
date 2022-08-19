import React, { useEffect, useState } from "react";
import { getSede } from "../service/sedeService";

export default function Sede() {
    const [sedeData, setSedeData] = useState([]);

    useEffect(() => {
        setSedeData(getSede());
        console.log(sedeData);
    }, []);

    const sede = sedeData.map((id, data) => {
        <><div className="flex flex-row justify-center mx-5" key={id}>
            <div className="w-1/2 m-5">
                <img className="w-auto" src="https://media.istockphoto.com/vectors/qatar-2022-vector-id1304763669?b=1&k=20&m=1304763669&s=170667a&w=0&h=mkYgshSQ00THszwOU3QB7dLYhIYfJtNaeNGVfLM7KYg=" />
            </div>
            <div className="w-1/2 m-5">
                <h2 className="text-5xl font-extrabold">{data.nombre}</h2>
                <p className="text-xl p-2">El mejor sitio de apuestas de internet!</p>
                <p className="text-xl p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien pharetra, posuere velit non,
                    vestibulum purus. Aenean cursus ornare fringilla.</p>
                <Boton />
                <p className="text-sm p-2">Ingresa para realizar tu apuesta</p>
            </div>
        </div><GruposNew /></>
    })
    return (
        {sede}
    );
}