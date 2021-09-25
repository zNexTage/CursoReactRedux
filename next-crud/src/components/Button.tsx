import React from 'react';

interface IButtonProps {
    children: any;
    color?: 'green' | 'blue' | 'gray';
    className?: string;
}

const Button = (props: IButtonProps) => {
    const color = props.color ?? 'gray';


    return (
        <button className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}

export default Button