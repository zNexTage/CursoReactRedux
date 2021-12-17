import React from 'react';

const ComParametro = (props) => {
    const status = props.nota >= 7 ? "Aprovado" : "Recuperação";

    return (
        <div>
            <hgroup>
                <h2>
                    {props.titulo}
                </h2>
                <h3>
                    {props.aluno}
                </h3>
            </hgroup>
            <p>
                Nota final: {props.nota} - Status: {status}
            </p>
        </div>
    )
}

export default ComParametro;