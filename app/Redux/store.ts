import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    modalSlice: modalSliceReducer,
  },
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
