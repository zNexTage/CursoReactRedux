import Layout from "../components/Layout";

const getStaticProps = () => {
    return {
        props: {
            number: Math.random()
        }
    }
}

const StaticContent = props => (
    <Layout>
        <div>
            {props.number}
        </div>
    </Layout>
)

export default StaticContent;

export {
    getStaticProps
}