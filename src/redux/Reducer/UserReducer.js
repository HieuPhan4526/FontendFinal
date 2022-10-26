import { USER_LOGIN } from "../../utils/setting";
import { SIGN_IN, SIGN_OUT } from "../Types/UserTypes";

let userData = JSON.parse(localStorage.getItem(USER_LOGIN))
const initialState = {
    user: userData ? userData.user : null
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            state.user = action.user
            return { ...state };
        case SIGN_OUT:
            state.user = null;
            return { ...state };
        default:
            return { ...state };
    }
};