import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreateCombine, RootState} from '.'


export const useActions = () =>  bindActionCreators(actionCreateCombine, useDispatch())
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector



