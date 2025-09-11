import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../utils/db';

type QueryBody = {
  q: string;
  topK?: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { q, topK = 5 }: QueryBody = req.body || {};
  if (!q) {
    return res.status(400).json({ error: 'q is required' });
  }

  try {
    // Compute embedding on the fly using SQL function if you have one; otherwise expect client to supply embedding.
    // For simplicity, we require client to call the upsert route beforehand and then query using pgvector operators.
    // This endpoint assumes you send an embedding vector; but here we'll demonstrate using the built-in cosine distance
    // with a subselect that recomputes the embedding via the same model would require an extension, so we keep it simple.
    // In practice, front-end should send the embedding computed server-side with OpenAI before this call.

    // Placeholder: perform a naive lexical search as fallback
    const { rows } = await query<{ doc_id: string; content: string; source: string | null; metadata: any }>(
      `SELECT doc_id, content, source, metadata FROM ai_documents
       WHERE content ILIKE '%' || $1 || '%'
       ORDER BY length(content)
       LIMIT $2`,
      [q, topK]
    );

    return res.status(200).json({ results: rows });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Query error', err);
    return res.status(500).json({ error: 'Failed to query embeddings' });
  }
}


