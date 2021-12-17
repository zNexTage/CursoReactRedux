import React from 'react';

const IndiretaFilho = props => {
    const min = 50;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => props.quandoClicar("João", gerarIdade(), true)}>Fornecer Informações</button>
        </div>
    )
}

export default IndiretaFilho;