import { child, get, ref } from "firebase/database"
import { db } from "../../firebase/firebase"

const path = 'Sedes'

export function getSede() {
    let dbRef = ref(db);
    let sedes = [];
    get(child(dbRef, path)).then((snapshot) => {
        snapshot.forEach((sedeSnapshot) => {
            sedes.push(sedeSnapshot);
        });
    }).catch((err) => {
        console.error(err);
    });

    return sedes;
}