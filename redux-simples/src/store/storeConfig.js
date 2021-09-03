//Configuração dos reducers
import { createStore, combineReducers } from 'redux';
import numberReducer from './reducers/numberReducer'

const reducers = combineReducers({
    numbers: numberReducer
});

const storeConfig = () => createStore(reducers);

export default storeConfig;