import React from 'react';

interface IButtonProps {
    children: any;
    color?: 'green' | 'blue' | 'gray';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button = (props: IButtonProps) => {
    const color = props.color ?? 'gray';
    const type = props.type ?? 'button';

    return (
        <button
            type={type}
            onClick={props.onClick}
            className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}

export default Button