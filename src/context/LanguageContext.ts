import {createContext} from "react";
import {UserDictionary} from "../interfaces/UserDictionary";
import languages from "../languages/languages.ts";

interface LanguageContextProps {
    userDictionary: UserDictionary;
}

export const LanguageContext = createContext<LanguageContextProps>({
    userDictionary: languages['EN-US']
});
