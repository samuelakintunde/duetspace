import { Resend } from "resend";

/** Where beta notifications go. */
const TO = "samuelakintunde73@gmail.com";

/** Must be an address on a domain verified in Resend. */
const FROM = "DuetSpace Beta <beta@duetspace.com>";

export type SignupNotification = {
  id: string;
  email: string;
  role: string | null;
  collaboration: string | null;
  challenge: string | null;
  collaboratedBefore: boolean | null;
};

function line(label: string, value: string | null) {
  return `${label}: ${value ?? "—"}`;
}

/**
 * Emails a new signup. Never throws: a notification failure must not cost a
 * signup, and the row is already committed by the time this runs. No-ops
 * when RESEND_API_KEY is absent, so the site works before Resend is set up.
 */
export async function notifyBetaSignup(signup: SignupNotification) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;

  const body = [
    line("Email", signup.email),
    line("Describes themselves as", signup.role),
    line("Would collaborate on", signup.collaboration),
    line(
      "Collaborated before",
      signup.collaboratedBefore === null
        ? null
        : signup.collaboratedBefore
          ? "Yes"
          : "No",
    ),
    "",
    "Biggest challenge when collaborating:",
    signup.challenge ?? "(left blank)",
    "",
    `Signup #${signup.id}`,
  ].join("\n");

  try {
    const { error } = await new Resend(key).emails.send({
      from: FROM,
      to: TO,
      replyTo: signup.email,
      subject: `DuetSpace beta signup: ${signup.email}`,
      text: body,
    });
    if (error) console.error("resend rejected the signup email", error);
  } catch (error) {
    console.error("signup email failed to send", error);
  }
}
