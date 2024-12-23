import {useEffect} from "react";
import {
    SelectPreferences,
    setChecking,
    startLoadingLanguage,
    startLoadingLayout,
    startLoadingTabs, startLoadingTheme
} from "../store/rememberTabs";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";

export const useCheckUser = () => {
    const dispatch = useAppDispatch();

    const { checking, layout, theme } = useAppSelector(SelectPreferences);

    useEffect(() => {
        dispatch(startLoadingLayout());
        dispatch(startLoadingLanguage());
        dispatch(startLoadingTabs());
        dispatch(startLoadingTheme());
        dispatch(setChecking('checked'));
    }, []);

    return {
        checking,
        layout,
        theme
    };
}