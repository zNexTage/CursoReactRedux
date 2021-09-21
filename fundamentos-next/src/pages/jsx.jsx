import Layout from "../components/Layout";

const Jsx = () => {
    const titulo = <h1>JSX é um conceito Central</h1>

    const subTitulo = () =>
        <h2>
            {'Muito Legal'.toUpperCase()}
        </h2>

    return (
        <Layout title='Entendendo o JSX'>
            {titulo}
            {subTitulo()}
        </Layout>
    )
}

export default Jsx;