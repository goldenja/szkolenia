import { createSlice } from '@reduxjs/toolkit'
import {fetchUserData, login, signOut} from './authThunk';

const initialState = {
    token: null,
    loading: false,
    userData: {},

};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [signOut.fulfilled]: (state, action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            
            const {accessToken, user} = action.payload;
            state.token = accessToken;
            state.userData = user;
            state.loading = false;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
        },
        [fetchUserData.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchUserData.fulfilled]: (state, action) => {
            const { user} = action.payload;
            state.userData = user;
            state.loading = false;
        },
        [fetchUserData.rejected]: (state, action) => {
            state.loading = false;
            state.userData = {};
        }
    },
})


export const {} = authSlice.actions;

export default authSlice.reducer;