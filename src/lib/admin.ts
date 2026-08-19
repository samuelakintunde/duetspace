import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "ds_admin";

function secret(): string | null {
  // Trimmed because the value is set through CLIs and dashboards that can
  // append a trailing newline, which would otherwise make the real password
  // impossible to type.
  const password = process.env.ADMIN_PASSWORD?.trim();
  return password && password.length > 0 ? password : null;
}

/** Session value derived from the password, so no session store is needed. */
function token(password: string): string {
  return createHmac("sha256", password)
    .update("admin-session-v1")
    .digest("hex");
}

/** Compares fixed-length digests rather than the raw strings, so the check
 *  can't be timed to learn the password's length or prefix. */
function sameDigest(a: string, b: string): boolean {
  const left = Buffer.from(a, "utf8");
  const right = Buffer.from(b, "utf8");
  return left.length === right.length && timingSafeEqual(left, right);
}

export function isConfigured(): boolean {
  return secret() !== null;
}

export function passwordMatches(candidate: string): boolean {
  const password = secret();
  if (!password) return false;
  return sameDigest(token(password), token(candidate.trim()));
}

export async function isSignedIn(): Promise<boolean> {
  const password = secret();
  if (!password) return false;
  const value = (await cookies()).get(COOKIE)?.value;
  return value ? sameDigest(value, token(password)) : false;
}

export async function startSession(): Promise<void> {
  const password = secret();
  if (!password) return;
  (await cookies()).set(COOKIE, token(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 12,
  });
}

export async function endSession(): Promise<void> {
  (await cookies()).delete({ name: COOKIE, path: "/admin" });
}
