import { applyMiddleware, combineReducers, createStore } from "redux";
import { WorkReducer } from "./Reducer/WorkReducer";
import { UserReducer } from "./Reducer/UserReducer";
import { CommentReducer } from "./Reducer/CommentReducer";
import thunk from "redux-thunk";
import { LoaddingReducer } from "./Reducer/LoaddingReducer";


const rootReducer = combineReducers({
    WorkReducer,
    UserReducer,
    CommentReducer,
    LoaddingReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));