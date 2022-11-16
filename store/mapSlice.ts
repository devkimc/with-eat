import { createSlice } from '@reduxjs/toolkit';

export type MapSliceType = {
    map: naver.maps.Map;
    markers: naver.maps.OverlayView[];
};

export const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: {
        map: undefined,
        markers: [],
    },
    reducers: {
        changeMap: (state, action) => {
            state.map = action.payload;
        },
        addMarker: (state, action) => {
            state.markers = state.markers.concat(action.payload);
        },
        clearMarker: (state) => {
            state.markers = [];
        },
    },
});

export const { changeMap, addMarker, clearMarker } = mapSlice.actions;
