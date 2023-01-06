import { Reducer } from '../reducer/reducer';
import { configureStore } from '@reduxjs/toolkit';

export const appStore = configureStore({
    reducer: {
        podcast: Reducer,
    },
});
export type AppDispatch = typeof appStore.dispatch;
export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
