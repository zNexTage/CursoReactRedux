import React from 'react';
import Header from '../Header';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const Todo = () => {
    return (
        <div>
            <Header
                name='Tarefas'
                small='Cadastro'
            />

            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Todo;