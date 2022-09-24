import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

export default function PaisesGrupo(grupo) {

    const path = "Paises";
    const [paisesData, setPaisesData] = useState([]);

    useEffect(() => {
        let dbRef = ref(db);
        let paises = [];
        get(child(dbRef, path)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((paisSnapshot) => {
                    if (paisSnapshot.val().grupoId === grupo.grupo) {
                        paises.push(paisSnapshot)
                    }

                })
            }
            setPaisesData(paises);
        })

        return () => {
            setPaisesData([]);
        }
    }, []);

    return (
        <div>
            <ul>
                {
                    paisesData.map((data) => {
                        return (
                            <div className="rounded overflow-hidden shadow-sm bg-yellow-100 border border-solid 
                            border-qatar4 flex justify-around px-5 mb-2 mx-3" key={data.key}>
                                <img src={data.val().img} alt={data.val().nombre} className="object-cover" />
                                <div className="font-bold text-xl my-1 pt-1 text-black mx-4">
                                    <span>{data.val().nombre}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}