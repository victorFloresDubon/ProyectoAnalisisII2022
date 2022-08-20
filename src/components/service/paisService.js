/**
 * Este archivo contendrá todos los métodos para retornar la información
 * relacionada con los grupos
 */

import { child, get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";

const path = 'Paises';

/**
 * Obtiene todos los países
 * @returns Array de SnapShot de Países
 */
export function getPaises(){
    let dbRef = ref(db)
    let paises = [];
    get(child(dbRef, path)).then((snapshot) => {
        if(snapshot.exists()){
            // Itera sobre los registros para obtener los países
            snapshot.forEach((paisSnapshot) => {
                paises.push(paisSnapshot.val());
                
            })
        }
    }).catch((err) => {
        console.error(err);
    });
    return paises;
}

/**
 * Obtiene los países dentro de un grupo específico
 * @param {*} grupoId 
 * @returns Array de SnapShot de Países
 */
export function getPaisesByGrupo(grupoId){
    let dbRef = ref(db);
    let paises = [];
    get(child(dbRef, path)).then((snapshot) => {
        if(snapshot.exists()){
            snapshot.forEach(paisSnapshot => {
                // SI el grupoID es igual al grupoId de paisSnapshot ENTONCES lo agrega al arreglo
                if(grupoId === paisSnapshot.val().grupoId){
                    paises.push(paisSnapshot.val());
                }
            });    
            console.log(paises);
        }

    }).catch((err) => {
        console.log(err);
    })

    return paises;
}