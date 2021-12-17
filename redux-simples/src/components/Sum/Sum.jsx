import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

const Sum = props => {
    const { max, min } = props;
    
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>
                        Resultado:&nbsp;
                    </span>
                    <strong>
                        {max + min}
                    </strong>
                </span>
            </div>
        </Card>)
}

const mapStateToProps = state => {
    return {
        max: state.numbers.max,
        min: state.numbers.min,
    }
}

export default connect(mapStateToProps)(Sum);