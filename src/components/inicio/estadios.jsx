import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

export default function Estadios() {
<<<<<<< HEAD

    const path = 'Estadios';
=======
    const path = "Estadios";
>>>>>>> fd523ba6fa15b7cd81a9720097e03019c963b6d9
    const [estadiosData, setEstadiosData] = useState([]);

    useEffect(() => {
        let dbRef = ref(db);
        let estadios = [];
        get(child(dbRef, path)).then((snapshot) => {
<<<<<<< HEAD
            if (snapshot.exists()){
                snapshot.forEach((estadioSnapshot) => {
                    estadios.push(estadioSnapshot);
                })
            }
            setEstadiosData(estadios);
        });
=======
            if(snapshot.exists()){
                snapshot.forEach((estadioSnapshot) => {
                        estadios.push(estadioSnapshot)
                })
            }
            setEstadiosData(estadios);
        })
>>>>>>> fd523ba6fa15b7cd81a9720097e03019c963b6d9

        return () => {
            setEstadiosData([]);
        }
    }, []);

<<<<<<< HEAD


    return (
        <div className="bg-corinto text-blanco">
            Acá irán los estadios
        </div>
=======
    return (
        <ul>
            {
            estadiosData.map((data) => {
                return (
                <li className="p-2 text-center border-2 bg-stone-300 border-red-600 border-solid rounded-lg font-bold grid grid-cols-2" key={data.key}>
                    <img src={data.val().img} alt={data.val().nombre} className="object-cover"/>
                    <p>
                    {data.val().nombre}
                    <br/>
                    <br/>
                    --*** Descripción del estadio ***--
                    </p>
                </li>
                )
            })
            }
        </ul>
>>>>>>> fd523ba6fa15b7cd81a9720097e03019c963b6d9
    );
}