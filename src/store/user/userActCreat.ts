import { USER_ACTION_TYPES } from "./userConst"
import { UserAction } from "./userActions";
import { Dispatch } from "redux";
import axios from "axios";

//поскольку экшны были представлены как интерфейсы, а не как ф-и,
//у нас нет ф-и, создающей экшн для диспатча, поэтому пишем его (как обьект) вручную
export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: USER_ACTION_TYPES.FETCH_USERS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => dispatch({ type: USER_ACTION_TYPES.FETCH_USERS_SUCCESS, payload: response.data }), 500)
        } catch (e) {
            dispatch({
                type: USER_ACTION_TYPES.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
