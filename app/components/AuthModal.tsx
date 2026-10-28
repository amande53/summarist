"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { closeModal } from "../Redux/slices/modalSlice";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import OrDivider from "./UI/OrDivider";
import { IoClose } from "react-icons/io5";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../lib/firebase/firebase";
import { useRouter } from "next/navigation";
import ResetPasswordForm from "./ResetPasswordForm";

export default function AuthModal() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.modalSlice.isOpen);
  const [newUser, setNewUser] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isReset, setIsReset] = useState<boolean>(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (newUser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch(closeModal());
          router.push("/for-you");
        })
        .catch((err) => {
          setError(err.code);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch(closeModal());
          router.push("/for-you");
        })
        .catch((err) => {
          setError(err.code);
        });
    }
  };

  return (
    <div className="fixed top-0 left-0 h-full bg-black/75  flex justify-center items-center flex-col w-full z-9999">
      <div className="relative max-w-100 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,.2)] w-full z-9999">
        <div className="pt-12 pb-6 px-8">
          <div className="text-center text-xl font-bold mb-6 text-sky-950">
            {isReset && !newUser ? (
              "Reset your password"
            ) : (
              <>{newUser ? "Sign up" : "Log In"} to Summarist</>
            )}
          </div>
          {error && <div className="mb-4 text-[#f56c6c]">Firebase: Error {error}</div>}
          {!newUser && !isReset && (
            <>
              <button
                className="relative flex bg-[#3a579d] hover:bg-[#25396b] duration-200 text-white justify-center w-full h-10 rounded-sm
              items-center min-w-45 text-base "
                onClick={() => {
                  signInWithEmailAndPassword(auth, "guest@guest.com", "guest123")
                    .then(() => {
                      dispatch(closeModal());
                      router.push("/for-you");
                    })
                    .catch((err) => {
                      setError(err.code);
                    });
                }}
              >
                <span className="rounded-sm left-0.5 absolute flex items-center justify-center w-9 h-9">
                  <FaUser className="w-6 h-6" />
                </span>
                Login as a Guest
              </button>
              <OrDivider />
            </>
          )}

          {!isReset && (
            <>
              <button
                className="relative flex bg-[#4285f4] hover:bg-[#3367d6] duration-200 text-white justify-center w-full h-10 rounded-sm
              items-center min-w-45 text-base "
                onClick={() => {
                  signInWithPopup(auth, new GoogleAuthProvider())
                    .then(() => {
                      dispatch(closeModal());
                      router.push("/for-you");
                    })
                    .catch((err) => {
                      setError(err.code);
                    });
                }}
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-sm bg-white absolute left-0.5">
                  <img
                    alt="Google"
                    src="/assets/google.png"
                    className="w-6 h-6"
                  />
                </span>
                {newUser ? "Sign up" : "Login"} with Google
              </button>
              <OrDivider />
            </>
          )}
          {!isReset && (
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="h-10 border-2 border-[#bac8ce] rounded-sm text-[#394547] px-3 focus:border-[#2bd97c] focus:outline-hidden"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                className="h-10 border-2 border-[#bac8ce] rounded-sm text-[#394547] px-3 focus:border-[#2bd97c] focus:outline-hidden"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="w-full h-10 rounded-sm text-base flex items-center bg-[#2bd97c] justify-center  min-w-45 hover:bg-[#20ba68] duration-200">
                {newUser ? "Sign Up" : "Login"}
              </button>
            </form>
          )}
          {isReset && <ResetPasswordForm />}
        </div>
        {!newUser && !isReset && (
          <div
            className="text-center text-[#116be9] font-light text-sm w-fit mx-auto mb-4 cursor-pointer hover:text-[#124a98]"
            onClick={() => {
              setIsReset(true);
              setError("");
            }}
          >
            Forgot your password?
          </div>
        )}
        <button
          className="h-10 text-center bg-stone-100 text-[#116be9] w-full rounded-[0_0_4px_4px] font-light text-base hover:bg-mist-200"
          onClick={() => {
            setError("");
            if (isReset) {
              setIsReset(false);
            } else {
              setNewUser(!newUser);
              setPassword("");
              setEmail("");
            }
          }}
        >
          {isReset && !newUser ? (
            "Go to login"
          ) : (
            <>{newUser ? "Already have an account?" : "Don't have an account"}</>
          )}
        </button>
        <div className="absolute top-3 right-3 flex cursor-pointer">
          <button
            onClick={() => {
              dispatch(closeModal());
              setNewUser(false);
              setError("");
              setIsReset(false);
            }}
          >
            <IoClose className="transition-opacity duration-200 hover:opacity-50 w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
