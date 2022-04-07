import { UserAction } from "./userActions";
import { USER_ACTION_TYPES, UserState } from "../user/userConst"

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case USER_ACTION_TYPES.FETCH_USERS: return { loading: true, error: null, users: [] }
        case USER_ACTION_TYPES.FETCH_USERS_SUCCESS: return { loading: false, error: null, users: action.payload }
        case USER_ACTION_TYPES.FETCH_USERS_ERROR: return { loading: false, error: action.payload, users: [] }
        default: return state
    }
}
