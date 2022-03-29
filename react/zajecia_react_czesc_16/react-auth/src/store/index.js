import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'

import { persistStore, persistReducer } from 'redux-persist'
import localStorage  from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import {combineReducers} from "redux";
import { getPersistConfig } from 'redux-deep-persist';

const reducers = combineReducers({
  auth: authReducer          
 });

const persistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: ['auth.loading']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export default store;