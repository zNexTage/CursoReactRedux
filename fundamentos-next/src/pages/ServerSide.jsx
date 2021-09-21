import Layout from "../components/Layout";

const getServerSideProps = () => {
    return {
        props: {
            number: Math.random()
        }
    }
}

const ServerSide = props => (
    <Layout>
        <div>
            {props.number}
        </div>
    </Layout>
)

export default ServerSide;

export {
    getServerSideProps
}