import { child, get, ref } from 'firebase/database';
import React from 'react';
import { useState } from 'react';
import { db } from '../firebase/firebase';

function Paises() {
    const path = "Paises";
    const [paisesData, setPaisesData] = useState([]);

    useState(() => {
        let dbRef = ref(db);
        let paises = [];
        get(child(dbRef, path)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((paisSnapshot) => {
                    paises.push(paisSnapshot);
                })
            }
            setPaisesData(paises);
        }).catch((err) => {
            console.log(err);
        });

        return () => {
            setPaisesData([]);
        }

    }, []);



    return (
        <div name="paises" className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Paises</h2>
                </div>
                <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        paisesData.map((data) => {
                            return (
                                <div className="rounded overflow-hidden shadow-lg bg-zinc-300 flex justify-center" 
                                key={data.key}>
                                    <img src={data.val().img} alt={data.val().nombre} />
                                    <div className="font-bold text-xl my-1 pt-1">
                                        {data.val().nombre}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Paises;