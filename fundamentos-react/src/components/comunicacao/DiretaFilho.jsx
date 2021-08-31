import React from 'react';

const DiretaFilho = props => {
    return (
        <div>
            <p>
                {props.texto} -  <b>{props.idade}</b> - {props.nerd ? "Verdadeiro" : "Falso"}!
            </p>
        </div>
    )
}

export default DiretaFilho;