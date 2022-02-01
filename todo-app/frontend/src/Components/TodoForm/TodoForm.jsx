import style from './style.module.css';

const TodoForm = () => {
    return (
        <form className="todoForm">
            <fieldset>
                <legend>
                    Formulário
                </legend>

                <div className={`row ${style.FormFieldsRow}`}>
                    <div className="col-xs-12 col-sm-9 col-md-10">
                        <label htmlFor="txtDescription">Descrição</label>
                        <input
                            id="txtDescription"
                            type="text"
                            className="form-control" />
                    </div>

                    <div className="col-xs-12 col-sm-3 col-md-2">
                        <button className="btn btn-primary">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}


export default TodoForm;