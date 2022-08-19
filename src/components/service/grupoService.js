/**
 * Este archivo contendrá todos los métodos para retornar la información
 * relacionada con los grupos
 */

import { child, get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";

const path = 'Grupos';

/**
 * Obtiene la información de los grupos
 * @returns Array de Grupos
 */
export function getGrupos(){  
    let dbRef = ref(db);
    let grupos = [];
    get(child(dbRef, path)).then((snapshot) => {
        snapshot.forEach((grupoSnapshot) => {
            grupos.push(grupoSnapshot);
        });
    }).catch((err) => {
        console.log(err);
    });
    return grupos;
    
   /*
    onValue(ref(db, path), (snapshot) => {
    snapshot.forEach((grupoSnapshot) => {
        grupos.push(grupoSnapshot);
    });
   }, {
    onlyOnce: true
   });
   return grupos;
   */
}
