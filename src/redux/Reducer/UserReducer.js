import { TOKEN, USER_LOGIN } from "../../utils/setting";
import { GET_INFO_USER, SIGN_IN, SIGN_OUT } from "../Types/UserTypes";
import { HIRED_WORK } from "../Types/WorkType";


let userLogin = {};
if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
    user: userLogin,
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.userLogin.user));
            localStorage.setItem(TOKEN, action.userLogin.token);
            state.user = action.userLogin;
            return { ...state };
        case SIGN_OUT:
            state.user = "";
            return { ...state };

        default:
            return { ...state };
    }
};