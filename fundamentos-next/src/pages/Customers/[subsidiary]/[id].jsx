import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

const Customer = () => {
    const router = useRouter();

    return (
        <Layout title='Navegação Dinâmica'>
            <p>
                Código = {router.query.id}
            </p>
            <p>

                Filial = {router.query.subsidiary}
            </p>
        </Layout>
    )
}

export default Customer;