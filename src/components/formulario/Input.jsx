import React, { useState } from 'react';
import "./Input.css"

const Input = prosp => {
    const [valor, setValor] = useState('Inicial');

    const quandoMudar = (event) => {
        setValor(event.target.value);
    }

    return (
        <div>
            <label htmlFor="txtInput">Digite aqui: </label>
            <input
                id="txtInput"
                className="Input"
                type="text"
                value={valor}
                onChange={quandoMudar}
            />
        </div>
    )
}

export default Input;