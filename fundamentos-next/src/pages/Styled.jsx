import Layout from '../components/Layout';
import style from './Styled.module.css'

const Styled = () => {
    return (
        <Layout>
            <div className={style.roxo}>
                <h1>
                    Estilo usando CSS Módulos
                </h1>
            </div>
        </Layout>
    )
}

export default Styled;