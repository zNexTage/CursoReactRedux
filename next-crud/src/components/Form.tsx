import React, { useState } from 'react';
import Customer from '../Model/Customer';
import Button from './Button';
import Input from './Input';

interface IFormProps {
    customer: Customer;
}

const Form = (props: IFormProps) => {
    const id = props.customer?.id;

    const [name, setName] = useState(props.customer?.name ?? '');
    const [age, setAge] = useState(props.customer?.age ?? 0);

    return (
        <form>
            {id &&
                <Input
                    readonly
                    className="mb-4"
                    labelText="Código"
                    value={id}
                    id="txtCode" />}
            <Input
                labelText="Nome"
                value={name}
                onChange={value => setName(value)}
                className="mb-4"
                id="txtName" />

            <Input
                labelText="Idade"
                value={age}
                onChange={value => setAge(value)}
                id="txtAge" />

            <div className='flex justify-end mt-7'>
                <Button color='blue' className='mr-2'>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button >
                    Cancelar
                </Button>
            </div>
        </form>
    )
};

export default Form;