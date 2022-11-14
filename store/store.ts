import { configureStore } from '@reduxjs/toolkit';
import { LocationSliceType, locationSlice } from './locationSlice';
import { searchSlice, SearchSliceType } from './searchSlice';

export type StoreStateType = {
    location: LocationSliceType;
    search: SearchSliceType;
};

const store = configureStore({
    reducer: {
        location: locationSlice.reducer,
        search: searchSlice.reducer,
    },
});

export default store;
