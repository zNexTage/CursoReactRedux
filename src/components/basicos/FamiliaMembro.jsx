import React from 'react';

const FamiliaMembro = (props) => {
    return (
        <div>
            <p>
                {props.nome} <strong>{props.sobrenome}</strong>
            </p>
        </div>
    )
}

export default FamiliaMembro;