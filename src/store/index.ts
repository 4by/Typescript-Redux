import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {todoReducer} from "./todo/todoReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import * as UserActionCreators from './user/userActCreat'
import * as TodoActionCreators from './todo/todoActCreat'

export const actionCreateCombine = {
    ...TodoActionCreators,
    ...UserActionCreators
}

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))
