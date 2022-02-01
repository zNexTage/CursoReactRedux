import IconButton from '../Buttons/IconButton';
import Grid from '../Grid';
import style from './style.module.css';

const TodoForm = ({ onSubmit }) => {
    return (
        <form
            onSubmit={onSubmit}
            className="todoForm">

            <fieldset>
                <legend>
                    Formulário
                </legend>

                <div className={`row ${style.FormFieldsRow}`}>
                    <Grid
                        xs={12}
                        sm={9}
                        md={10}
                    >
                        <label htmlFor="txtDescription">Descrição</label>
                        <input
                            id="txtDescription"
                            type="text"
                            name='description'
                            className="form-control" />
                    </Grid>

                    <Grid
                        xs={12}
                        sm={3}
                        md={2}
                    >
                        <IconButton
                            buttonClass={'primary'}
                            icon={'plus'}
                        />
                    </Grid>

                </div>
            </fieldset>
        </form>
    )
}


export default TodoForm;