import "./Display.css"
import React from 'react';

const Display = props => (
    <div className="display">
        {props.value}
    </div>
)

export default Display;