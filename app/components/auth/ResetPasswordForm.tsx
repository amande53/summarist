"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";
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
        <p className="mb-4 text-error">{message}</p>
      ) : (
        <p className="mb-4 text-green">{message}</p>
      )}
      <input
        type="email"
        placeholder="Email address"
        className="h-10 w-full border-2 border-line-dark rounded-sm text-ink px-3 focus:border-green focus:outline-hidden"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="w-full h-10 rounded-sm text-base flex items-center bg-green justify-center  min-w-45 hover:bg-green-dark duration-200"
        type="submit"
      >
        Send reset password link
      </button>
    </form>
  );
}
