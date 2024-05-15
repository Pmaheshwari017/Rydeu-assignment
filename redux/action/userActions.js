import { LOGIN, USERNAME } from "./Types";
export const setUsername = (username) => {
    return {
        type: USERNAME,
        payload: username
    }
}
export const setLogin = (flog) => {
    return {
        type: LOGIN,
        payload: flog
    }
}