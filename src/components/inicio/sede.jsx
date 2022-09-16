/**
 * Sección de información de la sede
 */
import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

export default function Sede() {
    const [sedeData, setSedeData] = useState({});
    const path = "Sedes";

    useEffect(() => {
        let dbRef = ref(db);
        get(child(dbRef, path)).then((snapshot) => {
            if (snapshot.val() !== null) {
                setSedeData({ ...snapshot.val() });
            } else {
                setSedeData({});
            }
        }).catch((err) => {
            console.error(err);
        })

        return () => {
            setSedeData({});
        }

    }, []);

    return (
        <>
            {Object.keys(sedeData).map((id) => {
                return (
                    <div className="container flex flex-row justify-center mx-5 
                    " key={id}>
                        <div className="flex flex-col-reverse w-1/2 m-5">
                            <img src="./img/qatar2022.svg" alt="qatar2022" />
                        </div>
                        <div className="w-1/2 m-5">
                            <h2 className="text-5xl font-extrabold">{sedeData[id].nombre}</h2>
                            <p className="text-xl p-2">El mejor sitio de apuestas de internet!</p>
                            <button className="rounded-full bg-rose-900 text-xl font-bold p-1.5 w-32 text-slate-100 mt-2 bg-corinto text-blanco">
                                Iniciar
                            </button>
                            <p className="text-sm p-2">Ingresa para realizar tu apuesta</p>
                        </div>
                    </div>

                )
            })}
        </>
    );
}