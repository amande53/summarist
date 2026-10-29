"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase/firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../Redux/slices/userSlice";

export default function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signed in: save the user to your user slice here
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
          })
        );
      } else {
        // signed out: clear the user from your user slice here
        dispatch(clearUser());
        console.log("signed out");
      }
    });

    return () => unsubscribe();
  }, []);

  return null;
}
