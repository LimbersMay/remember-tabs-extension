import {useUserPreferences} from "../../hooks/useUserPreferences.js";
import {ChromeLocalStorageService, MokeLocalStorageService} from "../home/services/index.js";
import {PreferencesContext} from "./PreferencesContext";

export const PreferencesProvider = ({ children }) => {

    // Inicializamos el servicio
    const localStorageService = new ChromeLocalStorageService();

    const {
        language,
        layout,
        handleGetLanguage,
        handleSetLanguage,
        handleGetLayout,
        handleSetLayout
    } = useUserPreferences(localStorageService);

    return (
        <PreferencesContext.Provider value={
            {
                language,
                layout,
                handleGetLanguage,
                handleSetLanguage,
                handleGetLayout,
                handleSetLayout
            }
        }>
            {children}
        </PreferencesContext.Provider>
    )

}
