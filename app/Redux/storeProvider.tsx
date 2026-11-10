"use client";

import { Provider } from "react-redux";
import { initialState, store } from "./store";
import AuthListener from "../components/auth/AuthListener";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      store={store}
      serverState={initialState}
    >
      <AuthListener />
      {children}
    </Provider>
  );
}
