import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

export default function Estadios() {

    const path = 'Estadios';
    const [estadiosData, setEstadiosData] = useState([]);

    useEffect(() => {
        let dbRef = ref(db);
        let estadios = [];
        get(child(dbRef, path)).then((snapshot) => {
            if (snapshot.exists()){
                snapshot.forEach((estadioSnapshot) => {
                    estadios.push(estadioSnapshot);
                })
            }
            setEstadiosData(estadios);
        });

        return () => {
            setEstadiosData([]);
        }
    }, []);



    return (
        <div className="bg-corinto text-blanco">
            Acá irán los estadios
        </div>
    );
}