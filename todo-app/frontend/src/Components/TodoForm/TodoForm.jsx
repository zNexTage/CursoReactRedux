import { useState } from 'react';
import IconButton from '../Buttons/IconButton';
import Grid from '../Grid';
import style from './style.module.css';

const TodoForm = ({ onAddSubmit, onSearchSubmit, onClearClick }) => {
    const [description, setDescription] = useState();


    const handleDescription = event => setDescription(event.target.value);

    return (
        <form
            className={style.TodoForm}>

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
                            onChange={handleDescription}
                            value={description}
                            className="form-control" />
                    </Grid>

                    <Grid
                        xs={12}
                        sm={3}
                        md={2}
                    >
                        <IconButton
                            type='button'
                            buttonClass={'primary m-2'}
                            icon={'plus'}
                            onClick={event => {
                                event.preventDefault();

                                onAddSubmit(description);
                            }}
                        />
                        <IconButton
                            type='button'
                            buttonClass={'info'}
                            icon={'search'}
                            onClick={event => {
                                event.preventDefault();

                                onSearchSubmit(description);
                            }}
                        />

                        <IconButton
                            type='button'
                            buttonClass={'danger'}
                            icon={'close'}
                            onClick={event => {
                                event.preventDefault();
                                setDescription('');
                                onClearClick();
                            }}
                        />
                    </Grid>

                </div>
            </fieldset>
        </form>
    )
}


export default TodoForm;