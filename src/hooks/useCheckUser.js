import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setChecking, startLoadingLanguage, startLoadingLayout, startLoadingTabs} from "../store/rememberTabs";

export const useCheckUser = () => {
    const dispatch = useDispatch();

    const { checking, layout } = useSelector(state => state.preferences);

    useEffect(() => {
        dispatch(startLoadingLayout());
        dispatch(startLoadingLanguage());
        dispatch(startLoadingTabs());
        dispatch(setChecking('checked'));
    }, []);

    return {
        checking,
        layout
    };
}