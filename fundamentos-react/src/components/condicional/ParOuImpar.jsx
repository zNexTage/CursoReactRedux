import React from 'react';

const ParOuImpar = props => {
    return (
        <div>
            {props.numero % 2 === 0 ? <p>Par</p> : <p>Impar</p>}

        </div >
    )
}

export default ParOuImpar;