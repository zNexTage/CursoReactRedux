import "./TabelaProdutos.css";
import React from 'react';
import produtos from '../../../data/produtos';

const TabelaProdutos = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((prod) => (
                    <tr key={prod.id}>
                        <td>
                            {prod.id}
                        </td>
                        <td>
                            {prod.nome}
                        </td>
                        <td>
                            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(prod.preco)}
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default TabelaProdutos;