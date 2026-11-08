"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { openModal } from "../../Redux/slices/modalSlice";

export default function NavLogin() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="nav__list nav__list--login">
      <button
        type="button"
        onClick={() => dispatch(openModal())}
      >
        Login
      </button>
    </li>
  );
}
