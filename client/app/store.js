import { configureStore } from '@reduxjs/toolkit';
import titleReducer from '../features/title/titleSlice';

export const store = configureStore({
    reducer: {
        title: titleReducer // Ensure correct reducer structure
    }
});

export default store;