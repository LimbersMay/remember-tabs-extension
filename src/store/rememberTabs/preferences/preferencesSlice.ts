import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import {Theme} from "../../../interfaces/UserDictionary.ts";

interface initialState {
    language: string;
    layout: string;
    checking: string;
    theme: Theme;
    autoSave: string;
}

const initialState: initialState = {
    language: 'EN-US',
    layout: 'EXTENDED',
    checking: 'checking',
    theme: 'LIGHT',
    autoSave: "false"
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string | null>) => {

            /*
                The reason why we are checking if the action.payload is empty is because it
                 could be the first time that the user is using the application and the language is not set yet.

                If that's the case and the user tries to open the application, the windows will be empty and the application will crash
                and won't be logs in the console.

                So, if the value is empty we will return the default value of the state that is 'EN-US',
                this for the language, layout, and theme.
             */

            if (!action.payload) {
                return state;
            }

            state.language = action.payload;
        },
        setLayout: (state, action: PayloadAction<string | null>) => {

            if (!action.payload) {
                return state;
            }

            state.layout = action.payload;
        },
        setTheme: (state, action: PayloadAction<Theme | null>) => {

            if (!action.payload) {
                return state;
            }

            state.theme = action.payload;
        },
        setChecking: (state, action: PayloadAction<string>) => {
            state.checking = action.payload;
        },
        setAutoSave: (state, action: PayloadAction<string>) => {
            if (!action.payload) {
                return state;
            }

            state.autoSave = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    setLanguage,
    setLayout,
    setChecking,
    setTheme,
    setAutoSave
} = preferencesSlice.actions
export const SelectPreferences = (state: RootState) => state.preferences;