"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../../Redux/store";

export default function RedirectIfLoggedIn() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);

  useEffect(() => {
    if (isLoading) return;

    if (user) {
      router.replace("/for-you");
    }
  }, [user, isLoading, router]);

  return null;
}
