import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

const Raffle = props => {
    const { max, min } = props;

    const random = Number.parseInt((Math.random() * (max - min))) + min

    return (
        <Card title="Sorteio de um Números" purple>
            <div>
                <span>
                    <span>
                        Resultado:&nbsp;
                    </span>
                    <strong>
                        {random}
                    </strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        max: state.numbers.max,
        min: state.numbers.min
    }
}

export default connect(mapStateToProps)(Raffle);