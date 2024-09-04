import { configureStore } from '@reduxjs/toolkit';
import translateReducer from './translatePart';

const store = configureStore({
    reducer: {
        translate: translateReducer,
    },
});

export default store;