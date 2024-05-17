import {createSlice} from '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: {
        language: 'EN-US',
        layout: 'EXTENDED',
        checking: 'checking'
    },
    reducers: {
        setLanguage: (state, action) => {

            if (!action.payload) {
                return state;
            }

            state.language = action.payload;
        },
        setLayout: (state, action) => {

            if (!action.payload) {
                return state;
            }

            state.layout = action.payload;
        },
        setChecking: (state, action) => {
            state.checking = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const {setLanguage, setLayout, setChecking} = preferencesSlice.actions
