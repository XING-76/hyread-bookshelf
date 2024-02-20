import { createSlice } from '@reduxjs/toolkit';
import { sendPayloadObject } from '@utils/reduxUtils';
import { initialState } from './data';

export const slice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        FETCH_GET_DATA: () => {},
        SET_BOOKS_DATA: sendPayloadObject('booksData'),
        SET_API_STATUS: sendPayloadObject('apiStatus'),
        SET_LOADING_STATE: sendPayloadObject('loadingState')
    }
});

export const { FETCH_GET_DATA, SET_BOOKS_DATA, SET_API_STATUS, SET_LOADING_STATE } = slice.actions;

export default slice.reducer;
