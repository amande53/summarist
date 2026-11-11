"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

// Shows its children only to people who don't have an active subscription,
// e.g. the "Premium" labels, which subscribers don't need to see.
export default function ShowIfNotSubscribed({ children }: { children: React.ReactNode }) {
  const isSubscribed = useSelector((state: RootState) => state.userSlice.isSubscribed);
  const isSubscriptionLoading = useSelector(
    (state: RootState) => state.userSlice.isSubscriptionLoading
  );

  // Wait until we know, so subscribers don't see the label flash and disappear
  if (isSubscriptionLoading || isSubscribed) return null;

  return <>{children}</>;
}
