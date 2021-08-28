import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = props => {
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [nerd, setNerd] = useState();

    const fornecerInformacoes = (nome, idade, nerd) => {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            <article>
                <p>{nome} - {idade} - {nerd ? "Verdadeiro" : "Falso"}</p>
            </article>

            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}

export default IndiretaPai;