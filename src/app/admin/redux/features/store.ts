"use client";

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedReducer
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, thunk),
});

export const persistor = persistStore(store);

// const initializeApp = async () => {
// await store.dispatch(
// apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
// );
// };
// initializeApp();
