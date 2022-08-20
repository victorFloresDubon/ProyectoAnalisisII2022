import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import PaisesGrupo from "./paisesGrupo";

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
                    console.log(grupoSnapshot.val());
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

        <div className="p-4 grid gap-4 grid-cols-4 grid-rows-2 md:grid-cols-6 flex-col">
            {gruposData.map((data) => {
                return (
                    <div className="w-1/2 m-5" key={data.key}>
                        <h2 className="text-2xl font-extrabold bg-rose-900 rounded-md text-center text-white">
                            {data.val().nombre}
                        </h2>
                        <PaisesGrupo grupo={data.key}></PaisesGrupo>
                    </div>
                )
            })}
        </div>

    )

}
