"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { Icon } from "./icon";

const DIALOG_ID = "beta-signup-dialog";

/** Option lists aren't in the Figma frame; they mirror the audiences in
 *  `who-its-for` and the formats in `use-cases` so the form and the page agree. */
const ROLES = [
  "Creator",
  "Expert",
  "Researcher",
  "Founder or team",
  "Something else",
];

const COLLABORATION_TYPES = [
  "Digital product",
  "Course",
  "Book or publication",
  "Research",
  "Podcast",
  "Software",
  "Service or programme",
  "Not sure yet",
];

const FIELD =
  "w-full rounded-[8px] border border-line bg-navy px-3 text-[14px] text-ink placeholder:text-faint focus:border-brand focus:outline-none";

const LABEL = "text-[13px] font-semibold text-ink";

function openBetaSignup() {
  const dialog = document.getElementById(DIALOG_ID);
  if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
}

/** Any CTA that should open the beta form. Renders a button, not a link,
 *  because the destination is a dialog on this page. */
export function BetaSignupButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openBetaSignup} className={className}>
      {children}
    </button>
  );
}

export function BetaSignupDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  // The page behind a native dialog still scrolls; lock it while open.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const lock = () => {
      document.body.style.overflow = "hidden";
    };
    const unlock = () => {
      document.body.style.overflow = "";
    };

    dialog.addEventListener("close", unlock);
    const observer = new MutationObserver(() => {
      if (dialog.open) lock();
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });

    return () => {
      dialog.removeEventListener("close", unlock);
      observer.disconnect();
      unlock();
    };
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      id={DIALOG_ID}
      ref={dialogRef}
      aria-labelledby="beta-signup-title"
      // Native dialogs ignore outside clicks; the backdrop is the dialog itself.
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
      className="m-auto max-h-[calc(100dvh-80px)] w-[calc(100vw-32px)] max-w-[580px] overflow-y-auto rounded-[20px] border border-line bg-panel p-0 shadow-modal backdrop:bg-[#0b132a]/70"
    >
      <div className="flex flex-col gap-6 p-6 sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h2
              id="beta-signup-title"
              className="text-[24px] font-extrabold text-ink"
            >
              Join the DuetSpace Beta
            </h2>
            <p className="text-[15px] text-body">
              Help us build the future of collaboration.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="flex shrink-0 rounded-full border border-line bg-tint p-[6px] transition-colors duration-200 hover:border-brand/40"
          >
            <Icon name="modal-x" size={14} />
          </button>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event.preventDefault();
            // TODO: post to the real beta-signup destination before navigating.
            close();
            router.push("/beta/success");
          }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="beta-email">
                Email Address
              </label>
              <input
                id="beta-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={`${FIELD} h-[42px]`}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="beta-role">
                What best describes you?
              </label>
              <select
                id="beta-role"
                name="role"
                defaultValue={ROLES[0]}
                className={`${FIELD} h-[42px] appearance-none bg-[url('/figma/modal-chevron-down.svg')] bg-[length:12px_12px] bg-[position:right_12px_center] bg-no-repeat pr-9`}
              >
                {ROLES.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="beta-collaboration">
                What would you most likely collaborate on?
              </label>
              <select
                id="beta-collaboration"
                name="collaboration"
                defaultValue={COLLABORATION_TYPES[0]}
                className={`${FIELD} h-[42px] appearance-none bg-[url('/figma/modal-chevron-down.svg')] bg-[length:12px_12px] bg-[position:right_12px_center] bg-no-repeat pr-9`}
              >
                {COLLABORATION_TYPES.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="beta-challenge">
                What&apos;s the biggest challenge you&apos;ve experienced when
                collaborating?
              </label>
              <textarea
                id="beta-challenge"
                name="challenge"
                rows={3}
                placeholder="e.g., keeping track of agreements, maintaining momentum, split of workload..."
                className={`${FIELD} h-[96px] resize-none py-3`}
              />
            </div>

            <fieldset className="flex flex-col gap-2">
              <legend className={`${LABEL} mb-2`}>
                Have you collaborated on something before?
              </legend>
              <div className="flex items-center gap-6">
                {["Yes", "No"].map((answer) => (
                  <label
                    key={answer}
                    className="flex items-center gap-2 text-[14px] font-medium text-ink"
                  >
                    {/* The Figma radio exports as two SVG states; a real input
                          styled to the same geometry keeps it operable. */}
                    <input
                      type="radio"
                      name="collaborated-before"
                      value={answer}
                      defaultChecked={answer === "Yes"}
                      className="size-4 appearance-none rounded-full border border-graphite bg-navy checked:border-[5px] checked:border-brand"
                    />
                    {answer}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-[10px] bg-brand px-7 py-3.5 text-[15px] font-semibold text-navy shadow-brand-vivid transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg active:translate-y-0"
            >
              Join the Beta
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
