import {ChromeLocalStorageService, MokeLocalStorageService} from "../../../home/services";
import {setLanguage, setLayout, setTheme} from "./preferencesSlice.ts";
import {AppDispatch} from "../../store.ts";
import {detectIfRunningInExtension} from "../../../utils/detecIfRunningInExtension.ts";
import {Theme} from "../../../interfaces/UserDictionary.ts";

let userService;

if (detectIfRunningInExtension()) {
    userService = new ChromeLocalStorageService();
} else {
    userService = new MokeLocalStorageService();
}

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

export const startLoadingTheme = () => {
    return async(dispatch: AppDispatch) => {
        // async code here
        const theme = await userService.getUserTheme();

        // sync code here
        dispatch(setTheme(theme));
    }
}

export const startSaveTheme = (theme: Theme) => {
    return async(dispatch: AppDispatch) => {
        // async code here
        await userService.setUserTheme(theme);

        // sync code here
        dispatch(setTheme(theme));
    }
}
