"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { closeModal } from "../Redux/slices/modalSlice";

export default function AuthModal() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.modalSlice.isOpen);

  if (!isOpen) return null;

  return (
    <div className="auth__overlay">
      <div className="auth__box">
        <button
          className="auth__close"
          onClick={() => dispatch(closeModal())}
        >
          X
        </button>
        <p>Login box goes here</p>
      </div>
    </div>
  );
}
