import React from 'react';

const Aleatorio = (props) => {

    props.minimo > props.maximo && (
        <h1>
            O valor mínimo informado está superior ao valor máximo!! 
        </h1>
    )

    const numeroAleatorio = Math.floor(Math.random() * props.maximo) + props.minimo;

    return (
        <p>
            O número aleatório gerado é: {numeroAleatorio}
        </p>
    )
}

export default Aleatorio;