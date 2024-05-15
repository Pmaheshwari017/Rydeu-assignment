import { USERNAME } from "../action/Types";
import { LOGIN } from "../action/Types";
const initialState = {
    username: '',
    islogin: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case LOGIN: {
            return {
                ...state,
                islogin: true
            }
        }
        default:
            return state;
    }
}