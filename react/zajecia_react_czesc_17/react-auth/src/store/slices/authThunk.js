import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api';

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (payload) => {
        const accessToken = payload.token;
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        const response = await api.get('/user');
        
        return response.data;
});

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await api.post('/login', payload);
    return response.data;
});

export const signOut = createAsyncThunk('auth/signOut', async () => {});