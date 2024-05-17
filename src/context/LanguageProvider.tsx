import {LanguageContext} from "./LanguageContext";
import dictionaries from "../languages/languages";
import {useAppSelector} from "../store/hooks";
import {selectPreferences} from "../store/rememberTabs";

export const LanguageProvider = ({ children }) => {

    const { language } = useAppSelector(selectPreferences);
    const userDictionary = dictionaries[language] ?? dictionaries['EN-US'];

    return (
        <LanguageContext.Provider value={
            {
                userDictionary
            }
        }>
            {children}
        </LanguageContext.Provider>
    )
}
