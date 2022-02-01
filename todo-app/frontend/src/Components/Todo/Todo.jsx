import React, { useState } from 'react';
import Header from '../Header';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const onAddSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const description = formData.get('description');

        if (!description.trim()) {
            alert('Informe a descrição!');
            return;
        }

        console.log(formData.get('description'));
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