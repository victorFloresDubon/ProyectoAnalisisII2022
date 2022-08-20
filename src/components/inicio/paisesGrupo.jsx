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
            if(snapshot.exists()){
                snapshot.forEach((paisSnapshot) => {
                    if(paisSnapshot.val().grupoId === grupo.grupo){
                        paises.push(paisSnapshot)
                    }
                    
                })
            }
            //console.log(paises);
            setPaisesData(paises);
        })

        return () => {
            setPaisesData([]);
        }
    }, [])

    return (
        <ul>
            {
            paisesData.map((data) => {
                return (
                <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold grid grid-cols-2" key={data.key}>
                    <img src={data.val().img} alt={data.val().nombre} className="object-cover"/>
                    {data.val().nombre}
                </li>
                )
            })
            }
        </ul>
    );
}