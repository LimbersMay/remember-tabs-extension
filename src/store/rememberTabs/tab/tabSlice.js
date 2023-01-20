import {createSlice} from '@reduxjs/toolkit';

export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const {increment} = tabSlice.actions;