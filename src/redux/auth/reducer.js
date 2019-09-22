import actions from "./actions";

const initState = {
    idToken: null,
    user: {
        name: "",
        email: "",
        avatar: ""
    }
};

export default function Auth(state = initState, action) {
    switch (action.type) {
        case actions.SET_USER:
            return ({ user: action.user })
        default:
            return state;
    }
}
