"use client";

import { useState } from "react";
import { signIn } from "../actions";

export function SignInForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <form
      className="flex w-full max-w-[360px] flex-col gap-4 rounded-[16px] border border-line bg-panel p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        setPending(true);
        setError(null);
        const result = await signIn(new FormData(event.currentTarget));
        setPending(false);
        if (result?.error) setError(result.error);
      }}
    >
      <div className="flex flex-col gap-1.5">
        <label
          className="text-[13px] font-semibold text-ink"
          htmlFor="password"
        >
          Admin password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="h-[42px] w-full rounded-[8px] border border-line bg-navy px-3 text-[14px] text-ink focus:border-brand focus:outline-none"
        />
      </div>
      {error && (
        <p role="alert" className="text-[13px] text-ink">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="flex h-[42px] items-center justify-center rounded-[10px] bg-brand text-[14px] font-semibold text-navy disabled:opacity-60"
      >
        {pending ? "Checking…" : "Sign in"}
      </button>
    </form>
  );
}
