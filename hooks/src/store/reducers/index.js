
const reducer = (state, action) => {
    switch (action.type) {
        case 'numberAdd2': {
            return { ...state, number: state.number + 2 }
        }
        case 'login': {
            return { ...state, user: { name: action.name } }
        }
        case 'multiplyBySeven': {
            return { ...state, number: state.number * 7 }
        }
        case 'divideByTwentyFive': {
            return { ...state, number: Number.parseInt(state.number / 25) }
        }
        case 'numberAddN': {
            return { ...state, number: state.number + action.number }
        }
        default: return state
    }
}


export { reducer };