"use server";

import { revalidatePath } from "next/cache";
import { endSession, passwordMatches, startSession } from "@/lib/admin";

export async function signIn(
  formData: FormData,
): Promise<{ error: string } | void> {
  const password = formData.get("password");
  if (typeof password !== "string" || !passwordMatches(password)) {
    // Slow every failure down a little: this endpoint is reachable directly,
    // and there is no rate limiter in front of it.
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { error: "Wrong password." };
  }
  await startSession();
  revalidatePath("/admin/signups");
}

export async function signOut(): Promise<void> {
  await endSession();
  revalidatePath("/admin/signups");
}
