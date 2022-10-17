import React from 'react';

function Stampa(){
    const stampa = () => console.log('Stampa questa frase al click su Print');
    return (
        <button onClick={ stampa }> Print </button>
    )
}

export default Stampa;