import IconButton from "../Buttons/IconButton";
import style from './TodoList.module.css';

const TodoList = ({ list = [], handleRemove, handleMarkAsDone, handleMarkAsPending }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th className="tableActions">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {list.map(todo => (
                    <tr key={todo._id}>
                        <td className={todo.done ? style.MarkedAsDone : ''}>
                            {todo.description}
                        </td>
                        <td>
                            <IconButton
                                hide={todo.done}
                                buttonClass={`success ${style.Button}`}
                                icon='check'
                                onClick={() => handleMarkAsDone && handleMarkAsDone(todo)}
                            />
                            <IconButton
                                hide={!todo.done}
                                buttonClass={`warning ${style.Button}`}
                                icon='undo'
                                onClick={() => handleMarkAsPending && handleMarkAsPending(todo)}
                            />
                            <IconButton
                                hide={!todo.done}
                                onClick={() => handleRemove && handleRemove(todo)}
                                buttonClass={`danger ${style.Button}`} icon={'trash'} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export default TodoList;