import {USER_ACTION_TYPES} from './userConst'

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
