import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import {Tab} from "../../../interfaces/Tab.ts";

export interface TabSliceInitialState {
    tabs: Tab[];
}

const initialState: TabSliceInitialState = {
    tabs: []
};

export const tabSlice = createSlice({
    name: 'tab',
    initialState: initialState,
    reducers: {
        setTabs: (state, action: PayloadAction<Tab[]>) => {
            state.tabs = action.payload;
        },
        deleteTabs: (state) => {
            state.tabs = [];
        },
        deleteTabById: (state, action: PayloadAction<number>) => {
            state.tabs = state.tabs.filter(tab => tab.id !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { setTabs, deleteTabs, deleteTabById } = tabSlice.actions;
export const SelectTabs = (state: RootState) => state.tabs;