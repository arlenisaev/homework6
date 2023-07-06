import { configureStore, combineReducers } from '@reduxjs/toolkit';
import getProductSlice from './slices/GetProductSlice';

const reducer = combineReducers({ getProductSlice });

export const store = configureStore({ reducer });
