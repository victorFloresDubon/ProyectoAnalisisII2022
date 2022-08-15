import React from "react";

export default function Boton(props){
    //Recibe el valor que se le envio en la vista
    let numero = props.numero;
    return(
        <button>
            Nuevo Boton {numero}
        </button>
    )
}