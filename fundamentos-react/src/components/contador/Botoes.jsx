import React from 'react';

const Botoes = props => {
    return (
        <div>
            <button onClick={props.incrementador}>+</button>
            <button onClick={props.decrementar}>-</button>
        </div>
    )
}

export default Botoes;