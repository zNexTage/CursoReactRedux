import React, { useEffect, useState } from 'react';
import Header from '../Header';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import axios from 'axios';
import { URL } from '../../Util/Endpoint';
import StringBuilder from '../../Builders/StringBuilder';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const onAddSubmit = async (description) => {
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

    const getTodos = async (description = '') => {
        try {
            const urlApi = new StringBuilder(`${URL}?sort=-created_at`);

            const search = description ? `&description__regex=/${description}/` : '';

            urlApi.append(search);

            const { data } = await axios.get(urlApi.toString());

            setTodoList([...data]);
        }
        catch (err) {
            console.log(err)
        }
    }

    const onSearchSubmit = description => {
        getTodos(description);
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

    const handleMarkAsDone = async (todo) => {
        await axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: true
        });

        getTodos();
    }

    const handleMarkAsPeding = async (todo) => {
        await axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: false
        });

        getTodos();
    }

    const handleClear = () => {
        getTodos();
    }

    useEffect(() => getTodos(), []);

    return (
        <div>
            <Header
                name='Tarefas'
                small='Cadastro'
            />

            <TodoForm
                onAddSubmit={onAddSubmit}
                onSearchSubmit={onSearchSubmit}
                onClearClick={handleClear}
            />

            <TodoList
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPeding}
                handleRemove={handleRemove}
                list={todoList}
            />
        </div>
    )
}

export default Todo;