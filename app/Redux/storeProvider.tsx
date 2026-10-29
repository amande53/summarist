"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import AuthListener from "../components/AuthListener";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthListener />
      {children}
    </Provider>
  );
}
