import { configureStore } from '@reduxjs/toolkit'
import {preferencesSlice, tabSlice} from "./rememberTabs";

export const store = configureStore({
    reducer: {
        tabs: tabSlice.reducer,
        preferences: preferencesSlice.reducer
    },
})
