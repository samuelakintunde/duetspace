"use client";

import Link from "next/link";
import { useState } from "react";

/** The frame links this to example.com — a Figma placeholder, not a destination.
 *  TODO: swap in the real scheduling link before this page goes public. */
const RESEARCH_BOOKING_URL = "#";

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
          onSubmit={(event) => {
            event.preventDefault();
            // TODO: post to the real research-response destination.
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

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/"
              className="flex items-center justify-center rounded-[10px] border border-brand bg-transparent px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-brand transition-colors duration-200 hover:bg-tint"
            >
              Skip for now
            </Link>
            <button
              type="submit"
              className="flex items-center justify-center rounded-[10px] bg-brand px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-navy shadow-brand-vivid transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg active:translate-y-0"
            >
              Share my story
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export function ResearchCallout() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="flex w-full max-w-[640px] flex-col items-center gap-4 rounded-[16px] border border-line bg-tint p-6">
      <p className="text-center text-[15px] font-semibold text-ink">
        Want to help us go deeper? Join a short product research conversation.
      </p>
      <div className="flex items-center gap-6">
        <a
          href={RESEARCH_BOOKING_URL}
          className="text-[14px] font-bold whitespace-nowrap text-brand"
        >
          Book a 20-minute conversation
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-[14px] font-semibold whitespace-nowrap text-body"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
