/**
 * Sección de información de la sede
 */
import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import bgImg from "../img/bg-qatar.png";

export default function Sede() {
    const [sedeData, setSedeData] = useState('');
    const path = "Sedes";

    useEffect(() => {
        let dbRef = ref(db);
        get(child(dbRef, path)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((child) => {
                    setSedeData(child.val().nombre)
                })
            } else {
                setSedeData("");
            }
        }).catch((err) => {
            console.error(err);
        })

        return () => {
            setSedeData({});
        }

    }, []);


    return (
        <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between
            border border-slate-300 rounded-xl shadow-xl">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <h1 className="py-3 text-5xl md:text-7xl font-bold">Qatar 2022</h1>
                    <p className="text-xl p-2">El mejor sitio de apuestas Online del Mundial!</p>
                </div>
                <div>
                    <img src={bgImg} alt="/" className="w-full" />
                </div>
            </div>
        </div>
    );
}
