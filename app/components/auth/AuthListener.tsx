"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";
import { useDispatch } from "react-redux";
import { clearUser, setSubscribed, setUser } from "../../Redux/slices/userSlice";
import { AppDispatch } from "../../Redux/store";
import { listenToSubscription } from "../../lib/stripe/subscription";

export default function AuthListener() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let stopSubscriptionListener: (() => void) | undefined;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // A different user (or nobody) is now logged in, so stop watching the old one
      stopSubscriptionListener?.();
      stopSubscriptionListener = undefined;

      if (user) {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
          })
        );
        stopSubscriptionListener = listenToSubscription(user.uid, (isSubscribed) => {
          dispatch(setSubscribed(isSubscribed));
        });
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      stopSubscriptionListener?.();
      unsubscribe();
    };
  }, [dispatch]);

  return null;
}
