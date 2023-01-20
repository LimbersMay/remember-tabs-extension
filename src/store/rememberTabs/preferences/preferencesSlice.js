import {createSlice} from '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: {
        language: 'ES-US',
        layout: 'SIMPLE'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setLayout: (state, action) => {
            state.layout = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {setLanguage, setLayout} = preferencesSlice.actions
