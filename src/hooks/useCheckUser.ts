import {useEffect} from "react";
import {
    selectPreferences,
    setChecking,
    startLoadingLanguage,
    startLoadingLayout,
    startLoadingTabs
} from "../store/rememberTabs";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";

export const useCheckUser = () => {
    const dispatch = useAppDispatch();

    const { checking, layout } = useAppSelector(selectPreferences);

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