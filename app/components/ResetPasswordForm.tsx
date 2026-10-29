"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../lib/firebase/firebase";
import { useState } from "react";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError(false);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Your reset email has been sent");
      })
      .catch((err) => {
        setError(true);
        setMessage(err.message);
      });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      {error ? (
        <span className="mb-4 text-[#f56c6c]">{message}</span>
      ) : (
        <span className="mb-4 text-[#2bd97c]">{message}</span>
      )}
      <input
        type="email"
        placeholder="Email address"
        className="h-10 w-full border-2 border-[#bac8ce] rounded-sm text-[#394547] px-3 focus:border-[#2bd97c] focus:outline-hidden"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="w-full h-10 rounded-sm text-base flex items-center bg-[#2bd97c] justify-center  min-w-45 hover:bg-[#20ba68] duration-200"
        type="submit"
      >
        Send reset password link
      </button>
    </form>
  );
}
