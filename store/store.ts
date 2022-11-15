import { configureStore } from '@reduxjs/toolkit';
import { LocationSliceType, locationSlice } from './locationSlice';
import { mapSlice, MapSliceType } from './mapSlice';
import { searchSlice, SearchSliceType } from './searchSlice';

export type StoreStateType = {
    location: LocationSliceType;
    map: MapSliceType;
    search: SearchSliceType;
};

const store = configureStore({
    reducer: {
        location: locationSlice.reducer,
        map: mapSlice.reducer,
        search: searchSlice.reducer,
    },
});

export default store;
