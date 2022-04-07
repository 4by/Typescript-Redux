import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {todoReducer} from "./todo/todoReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
