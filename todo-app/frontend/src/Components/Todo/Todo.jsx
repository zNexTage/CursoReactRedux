import React, { useState } from 'react';
import Header from '../Header';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import axios from 'axios';
import { URL } from '../../Util/Endpoint';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const onAddSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const description = formData.get('description');

        if (!description.trim()) {
            alert('Informe a descrição!');
            return;
        }

        try {
            await axios.post(URL, { description });

            console.log('funfou')
        }
        catch (err) {
            console.log('não funfou');
        }
    }

    return (
        <div>
            <Header
                name='Tarefas'
                small='Cadastro'
            />

            <TodoForm
                onSubmit={onAddSubmit}
            />

            <TodoList />
        </div>
    )
}

export default Todo;