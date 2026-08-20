import type { VercelRequest, VercelResponse } from '@vercel/node';
import { turso } from '../src/lib/turso.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body as { email?: string };
  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email' });
  }

  try {
    await turso.execute({
      sql: 'INSERT INTO signups (email) VALUES (?)',
      args: [email.trim().toLowerCase()],
    });
    return res.status(200).json({ ok: true });
  } catch (err: any) {
  if (err?.message?.includes('UNIQUE constraint')) {
    return res.status(200).json({ ok: true }); // already signed up
  }
  console.error('Signup insert failed:', err);
  return res.status(500).json({ error: 'Something went wrong' });
}
}
