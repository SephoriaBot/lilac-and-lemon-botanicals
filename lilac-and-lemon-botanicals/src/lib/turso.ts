import { createClient } from '@libsql/client';

const url = process.env.TURSO_DATABASE_URL;
const token = process.env.TURSO_AUTH_TOKEN;

console.log('TURSO URL:', url);
console.log('TURSO TOKEN EXISTS:', !!token);
console.log('TURSO TOKEN LENGTH:', token?.length);

export const turso = createClient({
  url: url!,
  authToken: token!,
});