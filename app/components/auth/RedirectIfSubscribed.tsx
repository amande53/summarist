"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../../Redux/store";

export default function RedirectIfLoggedIn() {
  const router = useRouter();
  const isSubscribed = useSelector((state: RootState) => state.userSlice.isSubscribed);
  const isSubscriptionLoading = useSelector(
    (state: RootState) => state.userSlice.isSubscriptionLoading
  );

  useEffect(() => {
    if (isSubscriptionLoading) return;

    if (isSubscribed) {
      router.replace("/for-you");
    }
  }, [isSubscribed, isSubscriptionLoading, router]);

  return null;
}
