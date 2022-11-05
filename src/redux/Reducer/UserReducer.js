import { TOKEN, USER_LOGIN } from "../../utils/setting";
import { SIGN_IN, SIGN_OUT } from "../Types/UserTypes";


let userLogin = {};
if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
    user: userLogin
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.userLogin.user));
            localStorage.setItem(TOKEN, action.userLogin.token);
            state.user = action.userLogin;
            return { ...state };
        case SIGN_OUT:
            state.user = null;
            return { ...state };
        default:
            return { ...state };
    }
};