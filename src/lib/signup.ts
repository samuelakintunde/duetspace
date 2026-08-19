import { cookies } from "next/headers";
import { sql } from "@/lib/db";

/** Set by submitBetaSignup so later pages know whose signup this is. */
export const SIGNUP_COOKIE = "ds_signup";

export type SignupContact = {
  id: string;
  email: string;
  researchConsent: boolean | null;
};

/** Returns the signup identified by the visitor's cookie, or null if they
 *  arrived without one (direct link, cleared cookies, different device). */
export async function currentSignup(): Promise<SignupContact | null> {
  const value = (await cookies()).get(SIGNUP_COOKIE)?.value;
  if (!value || !/^\d+$/.test(value)) return null;

  try {
    const rows = (await sql()`
      select id, email, research_consent
      from beta_signups where id = ${value} limit 1
    `) as { id: string; email: string; research_consent: boolean | null }[];

    const row = rows[0];
    return row
      ? { id: row.id, email: row.email, researchConsent: row.research_consent }
      : null;
  } catch (error) {
    console.error("could not load the current signup", error);
    return null;
  }
}
