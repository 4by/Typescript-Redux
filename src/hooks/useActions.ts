import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreateCombine} from '../store'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreateCombine, dispatch)
}
