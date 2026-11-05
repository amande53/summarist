"use client";

import { useDispatch } from "react-redux";
import { openSidebar } from "../../Redux/slices/sidebarSlice";
import { AppDispatch } from "../../Redux/store";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuButton() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button
      onClick={() => {
        dispatch(openSidebar());
      }}
      aria-label="Open Menu"
      className="flex items-center justify-center cursor-pointer md:hidden text-2xl"
    >
      <RxHamburgerMenu />
    </button>
  );
}
