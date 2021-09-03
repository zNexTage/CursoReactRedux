import { CHANGE_MAX_VALUE, CHANGE_MIN_VALUE } from "./actionTypes";

const changeMinValue = newNum => {
    return {
        type: CHANGE_MIN_VALUE,
        payload: newNum
    }
}

const changeMaxValue = newNum => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: newNum
    }
}

export { changeMinValue, changeMaxValue };