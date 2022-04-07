import {TODO_ACTION_TYPES} from './todoConst'

interface FetchTodoAction {
    type: TODO_ACTION_TYPES.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TODO_ACTION_TYPES.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FetchTodoErrorAction {
    type: TODO_ACTION_TYPES.FETCH_TODOS_ERROR;
    payload: string;
}
interface SetTodoPage {
    type: TODO_ACTION_TYPES.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction =
    FetchTodoAction
    | FetchTodoErrorAction
    | FetchTodoSuccessAction
    | SetTodoPage
