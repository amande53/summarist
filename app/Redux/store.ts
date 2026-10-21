import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "./slices/modalSlice";
import userSliceReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    modalSlice: modalSliceReducer,
    userSlice: userSliceReducer,
  },
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
