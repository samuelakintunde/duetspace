"use server";

import { cookies } from "next/headers";
import { after } from "next/server";
import { sql } from "@/lib/db";
import { notifyBetaSignup } from "@/lib/notify";
import { SIGNUP_COOKIE } from "@/lib/signup";

export type ActionResult = { ok: true } | { ok: false; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Server-side trim and cap. Actions are reachable by direct POST, so no input
 *  is trusted just because the form limited it. */
function text(value: FormDataEntryValue | null, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed === "" ? null : trimmed;
}

export async function submitBetaSignup(
  formData: FormData,
): Promise<ActionResult> {
  const email = text(formData.get("email"), 320)?.toLowerCase() ?? "";
  if (!EMAIL.test(email)) {
    return { ok: false, error: "That email address doesn't look right." };
  }

  const before = formData.get("collaborated-before");

  try {
    const rows = (await sql()`
      insert into beta_signups
        (email, role, collaboration, challenge, collaborated_before)
      values (
        ${email},
        ${text(formData.get("role"), 120)},
        ${text(formData.get("collaboration"), 120)},
        ${text(formData.get("challenge"), 4000)},
        ${before === "Yes" ? true : before === "No" ? false : null}
      )
      returning id
    `) as { id: string }[];

    // Sent after the response so a slow mail provider never delays the form,
    // and a failing one never fails the signup.
    after(() =>
      notifyBetaSignup({
        id: String(rows[0].id),
        email,
        role: text(formData.get("role"), 120),
        collaboration: text(formData.get("collaboration"), 120),
        challenge: text(formData.get("challenge"), 4000),
        collaboratedBefore:
          before === "Yes" ? true : before === "No" ? false : null,
      }),
    );

    const store = await cookies();
    store.set(SIGNUP_COOKIE, String(rows[0].id), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return { ok: true };
  } catch (error) {
    console.error("beta signup failed", error);
    return {
      ok: false,
      error: "We couldn't save that. Please try again in a moment.",
    };
  }
}

export async function submitCollaborationStory(
  formData: FormData,
): Promise<ActionResult> {
  const fields = [
    text(formData.get("collaborated-with"), 500),
    text(formData.get("creating"), 500),
    text(formData.get("went-well"), 4000),
    text(formData.get("became-difficult"), 4000),
  ];

  if (fields.every((field) => field === null)) {
    return { ok: false, error: "Fill in at least one answer before sharing." };
  }

  const cookieValue = (await cookies()).get(SIGNUP_COOKIE)?.value;
  const signupId =
    cookieValue && /^\d+$/.test(cookieValue) ? cookieValue : null;

  try {
    await sql()`
      insert into collaboration_stories
        (signup_id, collaborated_with, creating, went_well, became_difficult)
      values (${signupId}, ${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]})
    `;
    return { ok: true };
  } catch (error) {
    console.error("story submission failed", error);
    return {
      ok: false,
      error: "We couldn't save that. Please try again in a moment.",
    };
  }
}

/**
 * Records whether the visitor agreed to be contacted for a research call, on
 * the email they already gave. Consent is per-signup and can be withdrawn by
 * answering again, so it stores the answer rather than only the yes.
 */
export async function setResearchConsent(
  consent: boolean,
): Promise<ActionResult> {
  const cookieValue = (await cookies()).get(SIGNUP_COOKIE)?.value;
  if (!cookieValue || !/^\d+$/.test(cookieValue)) {
    return { ok: false, error: "We couldn't tell which signup this is." };
  }

  try {
    await sql()`
      update beta_signups
      set research_consent = ${consent}, research_consent_at = now()
      where id = ${cookieValue}
    `;
    return { ok: true };
  } catch (error) {
    console.error("research consent update failed", error);
    return {
      ok: false,
      error: "We couldn't save that. Please try again in a moment.",
    };
  }
}
