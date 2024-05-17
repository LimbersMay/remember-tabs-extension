import {createContext} from "react";
import {UserDictionary} from "../interfaces/UserDictionary.ts";

export const LanguageContext = createContext<UserDictionary>(null);
