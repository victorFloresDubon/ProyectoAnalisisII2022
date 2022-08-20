import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import PaisesGrupo from "./paisesGrupo";

const dbRef = ref(db);
const pathGrupos = "Grupos";
const pathPaises = "Paises";

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

        <div className="grid gap-4 grid-cols-4 grid-rows-2 md:grid-cols-6 flex-col">
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

/**
 * Trae los países por su ID
 */
function handlePaisesByGrupo(grupoId) {
    let paises = [];
    get(child(dbRef, pathPaises)).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((paisSnapshot) => {
                // SI el grupoID es igual al grupoId de paisSnapshot ENTONCES lo agrega al arreglo
                if (grupoId === paisSnapshot.val().grupoId) {
                    paises.push(paisSnapshot.val());
                }
            })
        }
    });
    return paises;
    /*
    if (paises.length > 0) {
        return (
            <>
                {paises.map((data) => {
                    console.log(data);
                    return (
                    <ul>
                        <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold">
                            <img src={data.val().img} alt={data.val().nombre} />
                            {data.val().nombre}
                        </li>
                    </ul>
                    );
                })}
            </>
        )
    //}
    */
}