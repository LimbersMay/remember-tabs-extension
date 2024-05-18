import {LanguageContext} from "./LanguageContext";
import dictionaries from "../languages/languages";
import {useAppSelector} from "../store/hooks";
import {SelectPreferences} from "../store/rememberTabs";

export const LanguageProvider = ({ children }) => {

    const { language } = useAppSelector(SelectPreferences);
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
