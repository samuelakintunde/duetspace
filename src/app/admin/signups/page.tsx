import type { Metadata } from "next";
import { signOut } from "@/app/admin/actions";
import { isConfigured, isSignedIn } from "@/lib/admin";
import { sql } from "@/lib/db";
import { SignInForm } from "./sign-in-form";

/** Always rendered per request. Without this the route can be prerendered at
 *  build time (the not-configured branch never reads cookies), which would
 *  serve a stale page and stale rows once ADMIN_PASSWORD exists. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Beta signups | DuetSpace",
  robots: { index: false, follow: false },
};

type Signup = {
  id: string;
  email: string;
  role: string | null;
  collaboration: string | null;
  challenge: string | null;
  collaborated_before: boolean | null;
  created_at: string;
};

type Story = {
  id: string;
  signup_id: string | null;
  email: string | null;
  collaborated_with: string | null;
  creating: string | null;
  went_well: string | null;
  became_difficult: string | null;
  created_at: string;
};

const CELL = "px-4 py-3 align-top text-[13px] text-body";
const HEAD = "px-4 py-3 text-left text-[11px] font-semibold text-brand";

function when(value: string) {
  return new Date(value).toISOString().slice(0, 16).replace("T", " ");
}

export default async function AdminSignupsPage() {
  if (!isConfigured()) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <p className="max-w-[420px] text-center text-[15px] text-body">
          Set <code className="text-brand">ADMIN_PASSWORD</code> in the
          environment to use this page. Without it there is nothing to check a
          password against, so access stays closed.
        </p>
      </main>
    );
  }

  if (!(await isSignedIn())) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <SignInForm />
      </main>
    );
  }

  const signups = (await sql()`
    select id, email, role, collaboration, challenge, collaborated_before, created_at
    from beta_signups order by id desc limit 500
  `) as Signup[];

  const stories = (await sql()`
    select c.id, c.signup_id, s.email, c.collaborated_with, c.creating,
           c.went_well, c.became_difficult, c.created_at
    from collaboration_stories c
    left join beta_signups s on s.id = c.signup_id
    order by c.id desc limit 500
  `) as Story[];

  return (
    <main className="flex flex-1 flex-col gap-10 px-6 py-16 md:px-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-[28px] font-extrabold text-ink">Beta signups</h1>
          <p className="text-[14px] text-body">
            {signups.length} signup{signups.length === 1 ? "" : "s"} ·{" "}
            {stories.length} stor{stories.length === 1 ? "y" : "ies"}
          </p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-[10px] border border-brand px-5 py-2.5 text-[13px] font-semibold text-brand transition-colors duration-200 hover:bg-tint"
          >
            Sign out
          </button>
        </form>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="eyebrow text-[11px] font-semibold text-brand">
          Signups
        </h2>
        {signups.length === 0 ? (
          <p className="text-[14px] text-body">No signups yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-[16px] border border-line">
            <table className="w-full min-w-[900px] border-collapse">
              <thead className="bg-panel">
                <tr>
                  <th className={HEAD}>When</th>
                  <th className={HEAD}>Email</th>
                  <th className={HEAD}>Describes as</th>
                  <th className={HEAD}>Would build</th>
                  <th className={HEAD}>Done before</th>
                  <th className={HEAD}>Biggest challenge</th>
                </tr>
              </thead>
              <tbody>
                {signups.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 === 0 ? "bg-navy" : "bg-panel"}
                  >
                    <td className={`${CELL} whitespace-nowrap`}>
                      {when(row.created_at)}
                    </td>
                    <td className={`${CELL} text-ink`}>
                      <a
                        href={`mailto:${row.email}`}
                        className="hover:text-brand"
                      >
                        {row.email}
                      </a>
                    </td>
                    <td className={CELL}>{row.role ?? "—"}</td>
                    <td className={CELL}>{row.collaboration ?? "—"}</td>
                    <td className={CELL}>
                      {row.collaborated_before === null
                        ? "—"
                        : row.collaborated_before
                          ? "Yes"
                          : "No"}
                    </td>
                    <td className={`${CELL} min-w-[280px]`}>
                      {row.challenge ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="eyebrow text-[11px] font-semibold text-brand">
          Collaboration stories
        </h2>
        {stories.length === 0 ? (
          <p className="text-[14px] text-body">No stories yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {stories.map((story) => (
              <article
                key={story.id}
                className="flex flex-col gap-3 rounded-[16px] border border-line bg-panel p-6"
              >
                <p className="text-[12px] text-body">
                  {when(story.created_at)} ·{" "}
                  {story.email ?? "not linked to a signup"}
                </p>
                <dl className="grid gap-3 md:grid-cols-2">
                  {[
                    ["Collaborated with", story.collaborated_with],
                    ["Were creating", story.creating],
                    ["Went well", story.went_well],
                    ["Became difficult", story.became_difficult],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1">
                      <dt className="text-[12px] font-semibold text-brand">
                        {label}
                      </dt>
                      <dd className="text-[13px] text-body">{value ?? "—"}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
