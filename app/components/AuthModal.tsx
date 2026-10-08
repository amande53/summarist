"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { closeModal } from "../Redux/slices/modalSlice";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";

export default function AuthModal() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.modalSlice.isOpen);
  const [newUser, setNewUser] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="auth">
      <div className="auth__content">
        <div className="auth__title">{newUser ? "Sign up" : "Log In"} to Summarist</div>
        {!newUser && (
          <>
            <button className="btn guest__btn--wrapper">
              <IoPerson /> Login as a Guest
            </button>
            <div>or</div>
          </>
        )}

        <button className="btn google__btn--wrapper">
          <img
            alt="Google"
            src="/assets/google.png"
          />
          {newUser ? "Sign up" : "Login"} with Google
        </button>
        <div>or</div>
        <form
          action=""
          className="auth__main--form"
        >
          <input
            type="email"
            placeholder="Email Address"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button className="btn">{newUser ? "Sign Up" : "Login"}</button>
        </form>
      </div>
      {!newUser && <div className="auth__forgot--password">Forgot your password?</div>}
      <button
        className="auth__switch--btn"
        onClick={() => setNewUser(!newUser)}
      >
        {newUser ? "Already have an account?" : "Don't have an account"}
      </button>
      <div className="auth__close--btn">
        <button
          className="auth__close"
          onClick={() => {
            dispatch(closeModal());
            setNewUser(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
