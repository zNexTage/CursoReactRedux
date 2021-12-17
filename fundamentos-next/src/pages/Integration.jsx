import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

//Consumindo uma API
const Integration = () => {
    const [id, setId] = useState(123);
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        getCustomerById(id);
    }, [id])

    const getCustomerById = (id) => {
        fetch(`http://localhost:3000/api/Customers/${id}`)
            .then(resp => resp.json())
            .then(resp => setCustomer(resp));
    }

    const handlerInput = event => { setId(event.target.value); }

    const onSubmit = event => {
        event.preventDefault();

        getCustomerById(id);
    }

    return (
        <Layout>
            <form onSubmit={onSubmit}>
                <label htmlFor='txtId'>Informe o id do cliente: </label>
                <input value={id} onChange={handlerInput} type='text' id='txtId' />
                <button>Obter cliente</button>
            </form>
            {customer &&
                <ul>
                    <li>
                        id: {customer.id}
                    </li>
                    <li>
                        Nome: {customer.nome}
                    </li>
                    <li>
                        Email: {customer.email}
                    </li>
                </ul>
            }
        </Layout>
    )
}

export default Integration;