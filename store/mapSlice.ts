import { createSlice } from '@reduxjs/toolkit';

export type MapSliceType = {
    map: any;
};

export const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: {
        map: undefined,
    },
    reducers: {
        changeMap: (state, action) => {
            state.map = action.payload;
        },
    },
});

export const { changeMap } = mapSlice.actions;
