import {TodoAction} from "./todoActions";
import {TODO_ACTION_TYPES, TodoState} from './todoConst'

const initialState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TODO_ACTION_TYPES.FETCH_TODOS:
            return {...state, loading: true}
        case TODO_ACTION_TYPES.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TODO_ACTION_TYPES.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TODO_ACTION_TYPES.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}
