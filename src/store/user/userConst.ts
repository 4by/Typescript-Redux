export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}
export enum USER_ACTION_TYPES {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
}