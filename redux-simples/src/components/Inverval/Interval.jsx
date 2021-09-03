import './Interval.css';
import React from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { changeMinValue, changeMaxValue } from '../../store/actions/numeros';

const Interval = props => {
    const { max, min } = props;

    return (
        <Card title="Intervalo de Número" red>
            <div className="Interval">
                <span>
                    <strong>
                        Mínimo:
                    </strong>
                    <input
                        type="number"
                        value={min}
                        onChange={e => props.onMinChange(Number.parseInt(e.target.value))}
                    />
                </span>
                <span>
                    <strong>
                        Máximo:
                    </strong>
                    <input
                        type="number"
                        value={max}
                        onChange={e => props.onMaxChange(Number.parseInt(e.target.value))}
                    />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMinChange(newNum) {
            const action = changeMinValue(newNum);
            dispatch(action);
        },
        onMaxChange(newNum) {
            const action = changeMaxValue(newNum);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);