import {LanguageContext} from "./LanguageContext.jsx";
import {useSelector} from "react-redux";
import dictionaries from "../languages/languages.js";

export const LanguageProvider = ({ children }) => {

    const { language } = useSelector(state => state.preferences);
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
