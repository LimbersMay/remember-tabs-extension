import {ChromeLocalStorageService} from "../../../home/services";
import {setLanguage, setLayout} from "./preferencesSlice.ts";
import {AppDispatch} from "../../store.ts";

const userService = new ChromeLocalStorageService();

export const startLoadingLanguage = () => {
    return async(dispatch: AppDispatch) => {
        // async code here
        const language = await userService.getUserLanguage();

        // sync code here
        dispatch(setLanguage(language));
    }
}

export const startLoadingLayout = () => {
    return async(dispatch: AppDispatch) => {
        // async code here
        const layout = await userService.getUserLayout();

        // sync code here
        dispatch(setLayout(layout));
    }
}

export const startSaveLanguage = (language: string) => {
    return async(dispatch: AppDispatch) => {
        // async code here
        await userService.setUserLanguage(language);

        // sync code here
        dispatch(setLanguage(language));
    }
}

export const startSaveLayout = (layout: string) => {
    return async(dispatch: AppDispatch) => {
        // async code here
        await userService.setUserLayout(layout);

        // sync code here
        dispatch(setLayout(layout));
    }
}
