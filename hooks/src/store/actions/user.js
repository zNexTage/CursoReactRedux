const login = (dispatch, name) => {
    dispatch({ type: 'login', name: name });
}

export {
    login
}