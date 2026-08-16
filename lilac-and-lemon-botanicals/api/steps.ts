import type { VercelRequest, VercelResponse } from '@vercel/node';
import { turso } from '../src/lib/turso';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const result = await turso.execute('SELECT * FROM ritual_steps ORDER BY step_order');
    return res.status(200).json(result.rows);
  }

  if (req.method === 'PATCH') {
    const { id, completed } = req.body as { id: number; completed: number };
    if (typeof id !== 'number') return res.status(400).json({ error: 'id is required' });
    await turso.execute({
      sql: 'UPDATE ritual_steps SET completed = ? WHERE id = ?',
      args: [completed ? 1 : 0, id],
    });
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, PATCH');
  return res.status(405).json({ error: 'Method not allowed' });
}
