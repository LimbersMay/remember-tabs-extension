import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import {Theme} from "../../../interfaces/UserDictionary.ts";

interface initialState {
    language: string;
    layout: string;
    checking: string;
    theme: Theme;
}

const initialState: initialState = {
    language: 'EN-US',
    layout: 'EXTENDED',
    checking: 'checking',
    theme: 'LIGHT'
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {

            if (!action.payload) {
                return state;
            }

            state.language = action.payload;
        },
        setLayout: (state, action: PayloadAction<string>) => {

            if (!action.payload) {
                return state;
            }

            state.layout = action.payload;
        },
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
        setChecking: (state, action: PayloadAction<string>) => {
            state.checking = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    setLanguage,
    setLayout,
    setChecking,
    setTheme
} = preferencesSlice.actions
export const SelectPreferences = (state: RootState) => state.preferences;