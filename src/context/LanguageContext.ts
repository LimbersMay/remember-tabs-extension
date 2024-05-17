import {createContext} from "react";
import {UserDictionary} from "../interfaces/UserDictionary";

interface LanguageContextProps {
    userDictionary: UserDictionary;
}

export const LanguageContext = createContext<LanguageContextProps>(null);
