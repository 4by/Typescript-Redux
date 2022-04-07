import { Dispatch } from "redux";
import axios from "axios";
import { TodoAction } from "./todoActions";
import { TODO_ACTION_TYPES } from "./todoConst"

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TODO_ACTION_TYPES.FETCH_TODOS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            })
            setTimeout(() => dispatch({ type: TODO_ACTION_TYPES.FETCH_TODOS_SUCCESS, payload: response.data }), 500)
        } catch (e) {
            dispatch({
                type: TODO_ACTION_TYPES.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}
export function setTodoPage(page: number): TodoAction {
    return { type: TODO_ACTION_TYPES.SET_TODO_PAGE, payload: page }
}
