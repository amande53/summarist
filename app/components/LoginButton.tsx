"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { openModal } from "../Redux/slices/modalSlice";

export default function LoginButton() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <button
        className="btn home__cta--btn"
        onClick={() => dispatch(openModal())}
      >
        Login
      </button>
    </>
  );
}
