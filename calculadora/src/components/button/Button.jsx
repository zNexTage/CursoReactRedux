import './Button.css';
import React from 'react';

const Button = props =>
    <button
        onClick={(e) => props.onClick && props.onClick(props.label)}
        className={`button ${props.operation ? 'operation ' : ''} ${props.double ? 'double' : ''} ${props.triple ? 'triple' : ''}`}>
        {props.label}
    </button>


export default Button;