"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { openModal } from "../../Redux/slices/modalSlice";

export default function LoginPrompt() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="max-w-115 mx-auto flex flex-col items-center">
      <Image
        src="/assets/login.png"
        alt="login"
        width={516}
        height={356}
      />
      <h2 className="text-navy text-2xl font-bold text-center mb-4 leading-normal">
        Log in to your account to read and listen to the book
      </h2>
      <button
        onClick={() => dispatch(openModal())}
        className="btn w-45"
      >
        Login
      </button>
    </div>
  );
}
