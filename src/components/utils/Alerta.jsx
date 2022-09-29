import React from 'react';
import { useState } from 'react';

const Alerta = ({color, mensaje}) => {

    const [showAlert, setShowAlert] = useState(true);

    return (
        <>
            {showAlert ? (
                <div className={"text-white px-6 border-0 rounded relative mb-4 bg-"+color+"-500"}>
                    <span className="text-xl inline-block-mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">
                            {mensaje}
                        </b>
                    </span>
                </div>
            ): null}
        </>
    );
};

export default Alerta;