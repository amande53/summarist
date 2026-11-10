import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "./slices/modalSlice";
import userSliceReducer from "./slices/userSlice";
import sidebarSliceReducer from "./slices/sidebarSlice";
import fontSizeSliceReducer from "./slices/fontSizeSlice";

export const store = configureStore({
  reducer: {
    modalSlice: modalSliceReducer,
    userSlice: userSliceReducer,
    sidebarSlice: sidebarSliceReducer,
    fontSizeSlice: fontSizeSliceReducer,
  },
});

export const initialState = store.getState();

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
