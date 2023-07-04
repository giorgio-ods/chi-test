import { configureStore } from '@reduxjs/toolkit';

import { carsApi } from './carsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        [carsApi.reducerPath]: carsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), carsApi.middleware]
        
});

setupListeners(store.dispatch);