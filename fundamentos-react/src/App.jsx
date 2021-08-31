import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import './App.css';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Desafios/Aleatorio';
import Card from './components/Layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/Repeticao/ListaAlunos';
import TabelaProdutos from './components/Repeticao/Desafio/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

const App = (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <article className="Cards">
                <Card titulo="#13 - Desafio Mega" color="#424242">
                    <Mega totalNumeros={5} />
                </Card>

                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="#11 - Componente Controlado" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#322e2f">
                    <IndiretaPai />
                </Card>


                <Card titulo="#09 - Comunicação Direta" color="#d9138a">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#e2d810">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: "Fernando" }} />
                    {/* <UsuarioInfo usuario={{ email: "nando@email.com" }} /> */}
                </Card>

                <Card titulo="#07 - Desafio - Tabela Produtos" color="#ffc13b">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição" color="#ff6e40">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 - Componentes com filhos" color="#1e3d59">
                    <Familia sobrenome="Santos">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#cf1578">
                    <Aleatorio minimo={1} maximo={60} />
                </Card>

                <Card titulo="#03 -Fragmento" color="#b20238">
                    <Fragmento />
                </Card>

                <Card titulo="#02 -ComParametro" color="#e8d21d">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Christian"
                        nota={9.3} />
                </Card>


                <Card titulo="#01 - Primeiro" color="#039fbe">
                    <Primeiro />
                </Card>
            </article>


        </div>
    )
}

export default App;