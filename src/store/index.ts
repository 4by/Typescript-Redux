import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { todoReducer } from "./todo/todoReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchUsers } from './user/userActCreat'
import { fetchTodos, setTodoPage } from './todo/todoActCreat'

export const actionCreateCombine = { fetchTodos, setTodoPage, fetchUsers }

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

// console.log(typeof rootReducer)

export const store = createStore(rootReducer, applyMiddleware(thunk))
