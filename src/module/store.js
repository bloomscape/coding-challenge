import { configureStore } from '@reduxjs/toolkit';
import vendingReducer from './vendingSlice';

export default configureStore({
    reducer: {
        vending: vendingReducer
    }
})