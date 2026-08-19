import { neon } from "@neondatabase/serverless";

type Sql = ReturnType<typeof neon>;

let cached: Sql | null = null;

/**
 * Lazily-created Neon client.
 *
 * Deliberately not created at module scope: `neon()` throws when DATABASE_URL
 * is missing, and Next evaluates top-level module code during `next build`,
 * which would break any build run without the env var present.
 */
export function sql(): Sql {
  if (!cached) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    cached = neon(url);
  }
  return cached;
}
