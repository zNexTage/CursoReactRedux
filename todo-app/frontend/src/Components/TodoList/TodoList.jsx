import IconButton from "../Buttons/IconButton";

const TodoList = ({ list = [], handleRemove }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {list.map(todo => (
                    <tr key={todo._id}>
                        <td>
                            {todo.description}
                        </td>
                        <td>
                            <IconButton
                                onClick={() => handleRemove && handleRemove(todo)}
                                buttonClass={'danger'} icon={'trash'} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export default TodoList;