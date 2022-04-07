import * as UserActionCreators from './user/userActCreat'
import * as TodoActionCreators from './todo/todoActCreat'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}
