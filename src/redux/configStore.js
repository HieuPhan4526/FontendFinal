import { applyMiddleware, combineReducers, createStore } from "redux";
import { WorkReducer } from "./Reducer/WorkReducer";
import { UserReducer } from "./Reducer/UserReducer";
import { CommentReducer } from "./Reducer/CommentReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    WorkReducer,
    UserReducer,
    CommentReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));