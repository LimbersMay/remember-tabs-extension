import {createSlice} from '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: {
        language: 'EN-US',
        layout: null,
        checking: 'checking'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setLayout: (state, action) => {
            state.layout = action.payload;
        },
        setChecking: (state, action) => {
            state.checking = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const {setLanguage, setLayout, setChecking} = preferencesSlice.actions
