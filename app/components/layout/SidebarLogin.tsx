"use client";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { MdLogin, MdLogout } from "react-icons/md";
import { AppDispatch, RootState } from "../../Redux/store";
import { openModal } from "../../Redux/slices/modalSlice";
import { auth } from "../../lib/firebase/firebase";
import SidebarItem from "./SidebarItem";

export default function SidebarLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);

  if (isLoading) return null;

  if (user) {
    return (
      <SidebarItem
        label="Logout"
        icon={<MdLogout />}
        onClick={() => signOut(auth)}
      />
    );
  }

  return (
    <SidebarItem
      label="Login"
      icon={<MdLogin />}
      onClick={() => dispatch(openModal())}
    />
  );
}
