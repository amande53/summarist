"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { openModal } from "../Redux/slices/modalSlice";

export default function LoginButton() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.modalSlice.isOpen);

  return (
    <>
      <button
        className="btn home__cta--btn"
        onClick={() => dispatch(openModal())}
      >
        Login
      </button>
      {isOpen && <p>The modal is open</p>}
    </>
  );
}
