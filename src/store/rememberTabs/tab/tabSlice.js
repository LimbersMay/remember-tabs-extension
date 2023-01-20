import {createSlice} from '@reduxjs/toolkit';

export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        tabs: []
    },
    reducers: {
        setTabs: (state, action) => {
            state.tabs = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const {setTabs} = tabSlice.actions;