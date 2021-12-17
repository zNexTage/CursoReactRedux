import "./Contador.css"
import React from 'react';

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5
        }
    }

    incrementador = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (event) => {
        this.setState({
            passo: Number.parseInt(event.target.value)
        })
    }

    render() {
        return (
            <div className="Contador">
                <h1>Contador</h1>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes
                    incrementador={this.incrementador}
                    decrementar={this.decremento}
                />
            </div>
        )
    }
}

export default Contador;