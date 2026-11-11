"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import type { Book } from "../../types/Book";
import LoginPrompt from "../auth/LoginPrompt";
import Spinner from "../UI/Spinner";

// Fills the whole summary area (the page's <main> is the positioned parent),
// so the spinner sits in the middle of it instead of under the title.
function CenteredSpinner() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Spinner />
    </div>
  );
}

type SummaryProps = Pick<Book, "summary" | "subscriptionRequired">;

export default function Summary({ summary, subscriptionRequired }: SummaryProps) {
  const fontSize = useSelector((state: RootState) => state.fontSizeSlice.fontSize);
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);
  const isSubscribed = useSelector((state: RootState) => state.userSlice.isSubscribed);
  const isSubscriptionLoading = useSelector(
    (state: RootState) => state.userSlice.isSubscriptionLoading
  );
  const router = useRouter();

  // Logged in, but this is a Premium book and they haven't subscribed
  const needsSubscription = Boolean(user) && subscriptionRequired && !isSubscribed;

  useEffect(() => {
    if (!isSubscriptionLoading && needsSubscription) {
      router.replace("/choose-plan");
    }
  }, [isSubscriptionLoading, needsSubscription, router]);

  if (isLoading) return <CenteredSpinner />;

  if (!user) return <LoginPrompt text="Log in to your account to read and listen to the book" />;

  if (isSubscriptionLoading || needsSubscription) return <CenteredSpinner />;

  return (
    <p
      className="whitespace-pre-line leading-[1.4] text-navy"
      style={{ fontSize: fontSize }}
    >
      {summary}
    </p>
  );
}
