import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import PaisesGrupo from "./inicio/paisesGrupo";

const dbRef = ref(db);
const pathGrupos = "Grupos";

export default function Grupos() {

    const [gruposData, setGruposData] = useState([]);

    useEffect(() => {
        let grupos = [];
        get(child(dbRef, pathGrupos)).then((snapshot) => {
            if (snapshot.val() !== null) {
                snapshot.forEach((grupoSnapshot) => {
                    grupos.push(grupoSnapshot);
                });
            }
            setGruposData(grupos);
        }).catch((err) => {
            console.error(err);
        })

        return () => {
            setGruposData([]);
        }
    }, []);

    return (
        <div name="grupos" className="w-full my-32 pb-6 bg-qatar4">
            <div className="max-w-[1240px] mx-auto relative">
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-white'>Grupos</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-4 px-4 pt-12 sm:pt-20">
                    {gruposData.map((data) => {
                        return (
                            <div className="bg-slate-300 rounded-xl shadow-2xl" key={data.key}>
                                <div className="text-center text-black font-bold">
                                    <h2>{data.val().nombre}</h2>
                                </div>
                                <PaisesGrupo grupo={data.key}></PaisesGrupo>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )

}
