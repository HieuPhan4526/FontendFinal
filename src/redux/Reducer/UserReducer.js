import { SIGN_UP } from "../Types/UserTypes";

const initialState = {
    user:{
    }
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            state.user = action.account
            return { ...state };
        default:
            return { ...state };
    }
    return { ...state };
};