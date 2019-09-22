const actions = {
    SET_USER: "SET_USER",
    setUser: (user) => {
        return (dispatch, getState) => {
            dispatch({
                type: actions.SET_USER,
                user: user,
            });
        }
    },
}

export default actions;