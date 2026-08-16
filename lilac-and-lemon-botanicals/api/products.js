import type { VercelRequest, VercelResponse } from '@vercel/node';
import { turso } from './turso';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const result = await turso.execute('SELECT * FROM products ORDER BY sort_order');
  return res.status(200).json(result.rows);
}
