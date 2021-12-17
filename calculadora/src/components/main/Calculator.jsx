import "./Calculator.css";
import React, { useState } from 'react';
import Button from "../button/Button";
import Display from "../display/Display";

const Calculator = props => {
    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    const clearMemory = () => {
        setDisplayValue('0');
        setClearDisplay(false);
        setOperation(null);
        setValues([0, 0]);
        setCurrent(0);
    }

    const addOperation = (opt) => {    
        if (current === 0) {
            setOperation(opt);
            setCurrent(1);
            setClearDisplay(true);
        } else {
            const isFinish = opt === '=';
            const currentOperation = operation;

            const newValues = [...values];

            try {
                newValues[0] = eval(`${newValues[0]} ${currentOperation} ${newValues[1]}`);
            }
            catch (err) {
                newValues[0] = values[0];
            }

            newValues[1] = 0;

            setDisplayValue(newValues[0]);
            setOperation(isFinish ? null : opt);
            setCurrent(isFinish ? 0 : 1);
            setClearDisplay(!isFinish);
            setValues([...newValues]);
        }
    }

    const addDigit = (number) => {
        if (number === '.' && displayValue.includes('.')) return; //Evitar ter dois pontos

        const shouldClearDisplay = displayValue === '0' || clearDisplay;

        const currentValue = shouldClearDisplay ? '' : displayValue;
        debugger
        const newDisplayValue = currentValue + number;

        setDisplayValue(newDisplayValue);
        setClearDisplay(false);

        if (number !== '.') {
            const indexValues = current;

            const newValue = parseFloat(newDisplayValue);
            const newValues = [...values];

            newValues[indexValues] = newValue;

            setValues([...newValues]);
        }
    }

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <Button label="AC" onClick={clearMemory} triple />
            <Button label="/" onClick={addOperation} operation />
            <Button label="7" onClick={addDigit} />
            <Button label="8" onClick={addDigit} />
            <Button label="9" onClick={addDigit} />
            <Button label="*" onClick={addOperation} operation />
            <Button label="4" onClick={addDigit} />
            <Button label="5" onClick={addDigit} />
            <Button label="6" onClick={addDigit} />
            <Button label="-" onClick={addOperation} operation />
            <Button label="1" onClick={addDigit} />
            <Button label="2" onClick={addDigit} />
            <Button label="3" onClick={addDigit} />
            <Button label="+" onClick={addOperation} operation />
            <Button label="0" onClick={addDigit} double />
            <Button label="." onClick={addDigit} />
            <Button label="=" onClick={addOperation} operation />
        </div>
    )
}

export default Calculator;