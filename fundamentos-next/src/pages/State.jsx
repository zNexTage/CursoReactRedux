import { useState } from "react";
import Layout from "../components/Layout";

const State = () => {
    const [number, setNumber] = useState(0);

    const onClick = () => {
        setNumber(number + 1);
    }

    return (
        <Layout title='Componente com Estado'>
            <h1>
                {number}
            </h1>

            <button onClick={onClick}>
                Incrementar
            </button>
        </Layout>
    )
}

export default State;