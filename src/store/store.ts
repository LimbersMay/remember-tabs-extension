import {AnyAction, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {preferencesSlice, tabSlice} from "./rememberTabs";

export const store = configureStore({
    reducer: {
        tabs: tabSlice.reducer,
        preferences: preferencesSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {preferences: PreferencesState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
AnyAction>;
