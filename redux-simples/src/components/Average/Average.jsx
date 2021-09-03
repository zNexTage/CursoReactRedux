import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

const Average = props => {
    const { max, min } = props;

    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>
                        Resultado:&nbsp;
                    </span>
                    <strong>
                        {(max + min) / 2}
                    </strong>
                </span>
            </div>
        </Card>
    )
}

//Pega o estado compartilhado do redux e passa via props para o componente
const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}


export default connect(mapStateToProps)(Average);