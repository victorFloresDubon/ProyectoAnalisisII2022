/**
 * Archivo de configuraciones de firebase
 */
import { initializeApp } from "firebase/app";
import {getDatabase, ref, onValue} from 'firebase/database';

const firebaseConfig = {
//    apiKey: process.env.REACT_APP_APIKEY,
//    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL//,
//    projectId: process.env.REACT_APP_PROJECTID,
//    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//    appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export async function getGrupos(){
    let gruposRef = ref(db, 'Grupos');
    let grupos = [];
    onValue(gruposRef, (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            grupos.push(childSnapshot.val().nombre);
        })
    }, {
        onlyOnce: true
    });
    
    console.log(grupos);
    return grupos;
}

