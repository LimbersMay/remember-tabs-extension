import {ChromeLocalStorageService} from "../../../home/services/index.js";
import {setLanguage, setLayout} from "./preferencesSlice.js";

const userService = new ChromeLocalStorageService();

export const startLoadingLanguage = () => {
    return async(dispatch) => {
        // async code here
        const language = await userService.getUserLanguage();

        // sync code here
        dispatch(setLanguage(language));
    }
}

export const startLoadingLayout = () => {
    return async(dispatch) => {
        // async code here
        const layout = await userService.getUserLayout();

        // sync code here
        dispatch(setLayout(layout));
    }
}

export const startSaveLanguage = (language) => {
    return async(dispatch) => {
        // async code here
        await userService.setUserLanguage(language);

        // sync code here
        dispatch(setLanguage(language));
    }
}

export const startSaveLayout = (layout) => {
    return async(dispatch) => {
        // async code here
        await userService.setUserLayout(layout);

        // sync code here
        dispatch(setLayout(layout));
    }
}
