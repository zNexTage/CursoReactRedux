import Link from 'next/link';
import Header from "../components/Header";
import Navigator from '../components/Navigator';

const Home = props => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
    }}>
        <Navigator
            color='crimson'
            destination='/Styled'
            text='Estiloso' />

        <Navigator
            color='#9400d3'
            destination='/Example' text='Exemplo' />

        <Navigator
            destination='/jsx'
            text='Jsx' />

        <Navigator
            color='green'
            destination='/Navigation'
            text='Navegação 01' />

        <Navigator
            color='green'
            destination='/Customers/sp/123'
            text='Navegação 02'
        />

        <Navigator
            color='red'
            destination='/State'
            text='Componente com estado'
        />

        <Navigator
            color='purple'
            destination='/Integration'
            text='Integração API'
        />

        <Navigator
            color='orange'
            destination='/StaticContent'
            text='Conteúdo Estático'
        />

        <Navigator
            color='darkgreen'
            destination='/ServerSide'
            text='Conteúdo Dinâmico'
        />
    </div>
)

export default Home;