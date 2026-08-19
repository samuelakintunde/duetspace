"use client";

import Link from "next/link";
import { useState } from "react";
import { setResearchConsent, submitCollaborationStory } from "@/app/actions";

const FIELD =
  "w-full rounded-[8px] border border-line bg-navy px-3 text-[14px] text-ink placeholder:text-faint focus:border-brand focus:outline-none";

const LABEL = "text-[13px] font-semibold text-ink";

const SHORT_FIELDS = [
  {
    name: "collaborated-with",
    label: "Who did you collaborate with?",
    placeholder: "e.g., designer, co-author, development team...",
  },
  {
    name: "creating",
    label: "What were you creating?",
    placeholder: "e.g., an online course, a mobile app, a newsletter...",
  },
];

const LONG_FIELDS = [
  {
    name: "went-well",
    label: "What went well?",
    placeholder: "e.g., strong alignment, clear communication...",
  },
  {
    name: "became-difficult",
    label: "What became difficult?",
    placeholder: "e.g., split of revenue, changing goals...",
  },
];

export function StoryCard() {
  const [shared, setShared] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex w-full max-w-[640px] flex-col gap-6 rounded-[20px] border border-line bg-panel p-6 sm:p-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] font-extrabold text-ink">
          {shared
            ? "Thanks for sharing your story."
            : "Would you like to share your collaboration story?"}
        </h2>
        <p className="text-[14px] text-body">
          {shared
            ? "It goes straight into what we're designing next."
            : "Help us understand real-world co-creation. It only takes a minute."}
        </p>
      </div>

      {!shared && (
        <form
          className="flex flex-col gap-6"
          onSubmit={async (event) => {
            event.preventDefault();
            setPending(true);
            setError(null);
            const result = await submitCollaborationStory(
              new FormData(event.currentTarget),
            );
            setPending(false);
            if (!result.ok) {
              setError(result.error);
              return;
            }
            setShared(true);
          }}
        >
          <div className="flex flex-col gap-4">
            {SHORT_FIELDS.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label className={LABEL} htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  placeholder={field.placeholder}
                  className={`${FIELD} h-[42px]`}
                />
              </div>
            ))}

            {LONG_FIELDS.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label className={LABEL} htmlFor={field.name}>
                  {field.label}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={3}
                  placeholder={field.placeholder}
                  className={`${FIELD} h-[96px] resize-none py-3`}
                />
              </div>
            ))}
          </div>

          {error && (
            <p role="alert" className="text-[13px] text-ink">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/"
              className="flex items-center justify-center rounded-[10px] border border-brand bg-transparent px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-brand transition-colors duration-200 hover:bg-tint"
            >
              Skip for now
            </Link>
            <button
              type="submit"
              disabled={pending}
              className="flex items-center justify-center rounded-[10px] bg-brand px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-navy shadow-brand-vivid transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
            >
              {pending ? "Sharing…" : "Share my story"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export function ResearchCallout({
  email,
  initialConsent,
}: {
  /** The address on record. Null when we can't tell whose signup this is. */
  email: string | null;
  initialConsent: boolean | null;
}) {
  const [consent, setConsent] = useState(initialConsent);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Without a signup to attach it to, consent would be unattributable.
  if (!email) return null;

  async function answer(value: boolean) {
    setPending(true);
    setError(null);
    const result = await setResearchConsent(value);
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setConsent(value);
  }

  if (consent === true) {
    return (
      <div className="flex w-full max-w-[640px] flex-col items-center gap-2 rounded-[16px] border border-line bg-tint p-6 text-center">
        <p className="text-[15px] font-semibold text-ink">
          Thanks. We&apos;ll email you at {email} to arrange a time.
        </p>
        <button
          type="button"
          onClick={() => answer(false)}
          disabled={pending}
          className="text-[13px] text-body underline transition-colors duration-200 hover:text-brand disabled:opacity-60"
        >
          Actually, don&apos;t contact me
        </button>
      </div>
    );
  }

  if (consent === false) {
    return (
      <div className="flex w-full max-w-[640px] flex-col items-center gap-2 rounded-[16px] border border-line bg-tint p-6 text-center">
        <p className="text-[15px] text-body">
          No problem. We won&apos;t contact you about a research call.
        </p>
        <button
          type="button"
          onClick={() => answer(true)}
          disabled={pending}
          className="text-[13px] text-body underline transition-colors duration-200 hover:text-brand disabled:opacity-60"
        >
          Changed your mind?
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[640px] flex-col items-center gap-4 rounded-[16px] border border-line bg-tint p-6">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <p className="text-[15px] font-semibold text-ink">
          Want to help us go deeper? Join a short product research conversation.
        </p>
        <p className="text-[13px] text-body">
          May we email you at {email} to arrange a 20 minute call? We&apos;ll
          only use it for this, and you can say no at any time.
        </p>
      </div>
      {error && (
        <p role="alert" className="text-[13px] text-ink">
          {error}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => answer(true)}
          disabled={pending}
          className="flex items-center justify-center rounded-[10px] bg-brand px-7 py-3 text-[14px] font-semibold whitespace-nowrap text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? "Saving…" : "Yes, email me"}
        </button>
        <button
          type="button"
          onClick={() => answer(false)}
          disabled={pending}
          className="flex items-center justify-center rounded-[10px] border border-brand bg-transparent px-7 py-3 text-[14px] font-semibold whitespace-nowrap text-brand transition-colors duration-200 hover:bg-tint disabled:opacity-60"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
