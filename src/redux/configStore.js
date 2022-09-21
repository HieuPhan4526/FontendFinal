import { applyMiddleware, combineReducers, createStore } from "redux";
import { WorkReducer } from "./Reducer/WorkReducer";
import { UserReducer } from "./Reducer/UserReducer";
import { CommentReducer } from "./Reducer/CommentReducer";



const rootReducer = combineReducers({
    WorkReducer,
    UserReducer,
    CommentReducer
});

export const store = createStore(rootReducer, applyMiddleware());