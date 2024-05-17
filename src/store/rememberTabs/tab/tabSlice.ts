import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";

export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        tabs: []
    },
    reducers: {
        setTabs: (state, action) => {
            state.tabs = action.payload;
        },
        deleteTabs: (state) => {
            state.tabs = [];
        },
        deleteTabById: (state, action) => {
            state.tabs = state.tabs.filter(tab => tab.id !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { setTabs, deleteTabs, deleteTabById } = tabSlice.actions;
export const SelectTabs = (state: RootState) => state.tabs;