import { configureStore } from '@reduxjs/toolkit';
import { locationType, locationSlice } from './locationSlice';

export type StoreStateType = {
    location: locationType;
};

const store = configureStore({
    reducer: {
        location: locationSlice.reducer,
    },
});

export default store;
