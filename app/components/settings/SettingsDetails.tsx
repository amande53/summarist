"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import SettingsItem from "./SettingsItem";
import LoginPrompt from "../auth/LoginPrompt";
import Skeleton from "../UI/Skeleton";

export default function SettingsDetails() {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);
  const isSubscribed = useSelector((state: RootState) => state.userSlice.isSubscribed);
  const isSubscriptionLoading = useSelector(
    (state: RootState) => state.userSlice.isSubscriptionLoading
  );

  if (isLoading || (user && isSubscriptionLoading)) {
    return (
      <>
        <Skeleton className="w-40 h-6 mb-3" />
        <Skeleton className="w-70 h-6 mb-8" />
        <Skeleton className="w-40 h-6 mb-3" />
        <Skeleton className="w-70 h-6" />
      </>
    );
  }

  if (!user) return <LoginPrompt text="Log in to your account to see your details." />;

  return (
    <>
      <SettingsItem
        heading="Your Subscription plan"
        text={isSubscribed ? "Premium" : "Basic"}
      >
        {!isSubscribed && (
          <Link
            href="/choose-plan"
            className="btn w-fit"
          >
            Upgrade to Premium
          </Link>
        )}
      </SettingsItem>
      <SettingsItem
        heading="Email"
        text={user.email ?? ""}
      />
    </>
  );
}
