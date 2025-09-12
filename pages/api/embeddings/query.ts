import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIEmbeddings } from '@langchain/openai';
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

  if (!process.env.REACT_APP_OPENAI_API_KEY) {
    return res.status(500).json({ error: 'REACT_APP_OPENAI_API_KEY not configured' });
  }

  try {
    // Generate embedding for the query
    const embeddings = new OpenAIEmbeddings({ model: 'text-embedding-3-small' });
    const queryVector = await embeddings.embedQuery(q);
    const vectorString = `[${queryVector.join(',')}]`;

    // Perform vector similarity search using cosine distance
    const { rows } = await query<{ 
      doc_id: string; 
      content: string; 
      source: string | null; 
      metadata: any;
      similarity: number;
    }>(
      `SELECT 
        doc_id, 
        content, 
        source, 
        metadata,
        1 - (embedding <=> $1::vector) as similarity
       FROM ai_documents
       ORDER BY embedding <=> $1::vector
       LIMIT $2`,
      [vectorString, topK]
    );

    return res.status(200).json({ results: rows });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Query error', err);
    return res.status(500).json({ error: 'Failed to query embeddings' });
  }
}


