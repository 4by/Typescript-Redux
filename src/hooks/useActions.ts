import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/ac_cr_conn'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
