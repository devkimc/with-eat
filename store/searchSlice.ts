import { createSlice } from '@reduxjs/toolkit';

export type SearchResultType = {
    id: string;
    name: string;
    address: string;
    tel: string;
    category: string[];
    context: string[];
    menuInfo: string;
    thumUrl: string;
    x: number;
    y: number;
};

export type SearchSliceType = {
    searchResult: SearchResultType[];
};

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        searchResult: [],
    },
    reducers: {
        addSearchResult: (state, action) => {
            state.searchResult = state.searchResult.concat(action.payload);
        },
        clearSearchResult: (state) => {
            state.searchResult = [];
        },
    },
});

export const { addSearchResult, clearSearchResult } = searchSlice.actions;
