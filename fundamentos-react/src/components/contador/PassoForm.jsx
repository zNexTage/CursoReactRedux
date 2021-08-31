import React from 'react';

const PassoForm = props => {
    return (
        <div>
            <label htmlFor="passoInput"></label>
            <input
                onChange={props.setPasso}
                type="number"
                value={props.passo}
                id="passoInput" />
        </div>
    )
}

export default PassoForm;