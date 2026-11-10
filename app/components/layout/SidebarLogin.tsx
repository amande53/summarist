"use client";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { AppDispatch, RootState } from "../../Redux/store";
import { openModal } from "../../Redux/slices/modalSlice";
import { auth } from "../../lib/firebase/firebase";
import SidebarItem from "./SidebarItem";
import { closeSidebar } from "../../Redux/slices/sidebarSlice";
import { FiLogOut, FiLogIn } from "react-icons/fi";

export default function SidebarLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);

  if (isLoading) return null;

  if (user) {
    return (
      <SidebarItem
        label="Logout"
        icon={<FiLogOut />}
        onClick={() => {
          signOut(auth);
          dispatch(closeSidebar());
        }}
      />
    );
  }

  return (
    <SidebarItem
      label="Login"
      icon={<FiLogIn />}
      onClick={() => {
        dispatch(openModal());
        dispatch(closeSidebar());
      }}
    />
  );
}
