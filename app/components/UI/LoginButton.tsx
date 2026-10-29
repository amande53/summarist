"use client";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { AppDispatch, RootState } from "../../Redux/store";
import { openModal } from "../../Redux/slices/modalSlice";
import { auth } from "../../lib/firebase/firebase";

export default function LoginButton() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);

  if (isLoading) {
    return <button className="btn home__cta--btn">Loading...</button>;
  }

  if (user) {
    return (
      <button
        className="btn home__cta--btn"
        onClick={() => signOut(auth)}
      >
        Log Out
      </button>
    );
  }

  return (
    <button
      className="btn home__cta--btn"
      onClick={() => dispatch(openModal())}
    >
      Login
    </button>
  );
}
