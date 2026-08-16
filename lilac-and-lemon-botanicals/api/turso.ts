import { createClient } from '@libsql/client';

// TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are set as environment variables
// in Vercel (Project Settings → Environment Variables) — never hardcode them here.
export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});
