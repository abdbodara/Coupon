import { configureStore } from "@reduxjs/toolkit";
import rootReducer from ".";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from "./api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
setupListeners(store.dispatch);

export { store };