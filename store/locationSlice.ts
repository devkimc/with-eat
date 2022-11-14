import { createSlice } from '@reduxjs/toolkit';

export type locationType = {
    lat: number;
    lon: number;
};

export const locationSlice = createSlice({
    name: 'locationSlice',
    initialState: {
        lat: 0,
        lon: 0,
    },
    reducers: {
        changeLocation: (
            state,
            action: {
                payload: locationType;
                type: string;
            }
        ) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        },
    },
});

export const { changeLocation } = locationSlice.actions;
