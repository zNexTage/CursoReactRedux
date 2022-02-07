import React, { useEffect, useState } from 'react';
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
            const { data } = await axios.post(URL, { description });

            setTodoList([...todoList, data]);
        }
        catch (err) {
            console.log('não funfou');
        }
    }

    const getTodos = async () => {
        try {
            const { data } = await axios.get(`${URL}?sort=-created_at`);

            setTodoList([...data]);
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleRemove = async (todo) => {
        try {
            await axios.delete(`${URL}/${todo._id}`);

            const todoListAux = todoList.filter(({ _id }) => _id !== todo._id);

            setTodoList([...todoListAux]);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => getTodos(), []);

    return (
        <div>
            <Header
                name='Tarefas'
                small='Cadastro'
            />

            <TodoForm
                onSubmit={onAddSubmit}
            />

            <TodoList
                handleRemove={handleRemove}
                list={todoList}
            />
        </div>
    )
}

export default Todo;