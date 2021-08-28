import React from 'react';
import alunos from '../../data/alunos';
import "./ListaAlunos.css";

const ListaAlunos = () => {
    return (
        <div>
            <ol>
                {alunos.map(aluno => (
                    <li key={aluno.id}>
                        {aluno.nome} - {aluno.nota}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ListaAlunos;