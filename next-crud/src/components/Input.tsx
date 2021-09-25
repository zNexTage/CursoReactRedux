import React from 'react';

interface IInputProps {
    id: string;
    labelText: string;
    type?: 'text' | 'number';
    value: any;
    readonly?: boolean;
    onChange?: (value: any) => void;
    className?: string;
}

const Input = ({ id, labelText, type, value, readonly, onChange, className }: IInputProps) => (
    <div className={`flex flex-col ${className}`}>
        <label htmlFor={id} className={`mb-2`}>
            {labelText}
        </label>
        <input
            id={id}
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-100
                px-4 py-2 
                ${readonly ? '' : 'focus:bg-white'}
            `}
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
            readOnly={readonly}
            type={type ?? 'text'} />
    </div>
);

export default Input;