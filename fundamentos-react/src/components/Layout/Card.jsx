import React from 'react';
import './Card.css';

const Card = (props) => {

    const color = props.color || "rgb(39, 226, 95)";

    const cardStyle = {
        backgroundColor: color,
        borderColor: color
    }

    return (
        <div className="Card" style={cardStyle}>
            <h1 className="Title">
                {props.titulo}
            </h1>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
};

export default Card;