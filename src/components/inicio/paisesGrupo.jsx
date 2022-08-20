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
                        paises.push(paisSnapshot.val())
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
                <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold" key={data.key}>
                    <img src={data.img} alt={data.nombre}/>
                    {data.nombre}
                </li>
                )
            })
            }
        </ul>
/*        <ul key={grupo}>
            <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold">Qatar</li>
            <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold">Ecuador</li>
            <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold">Senegal</li>
            <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold">Paises Bajos</li>
        </ul>
        */
    );
}