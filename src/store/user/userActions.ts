import {USER_ACTION_TYPES} from './userConst'

//экшны записываются через интерфейс, а не через ф-ю, создающую обьект, поскольку
//интерфейс представляет собой тип, что удобно в тайпскрипт

interface FetchUsersAction {
    type: USER_ACTION_TYPES.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: USER_ACTION_TYPES.FETCH_USERS_SUCCESS;
    payload: any[]
}
interface FetchUsersErrorAction {
    type: USER_ACTION_TYPES.FETCH_USERS_ERROR;
    payload: string;
}
export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction
