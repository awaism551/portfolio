import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIEmbeddings } from '@langchain/openai';
import { query } from '../../../utils/db';

type UpsertBody = {
  docId: string;
  content: string;
  source?: string;
  metadata?: Record<string, any>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log("🚀 ~ handler ~ req.body:", req.body)
  const { docId, content, source, metadata }: UpsertBody = req.body || {};
  if (!docId || !content) {
    return res.status(400).json({ error: 'docId and content are required' });
  }
  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY not configured")
    return res.status(500).json({ error: 'OPENAI_API_KEY not configured' });
  }

  try {
    console.log("🚀 ~ try ~ embeddings")
    const embeddings = new OpenAIEmbeddings({ model: 'text-embedding-3-small' });
    const vector = await embeddings.embedQuery(content);

    console.log("🚀 ~ try ~ vector")
    // Convert JavaScript array to PostgreSQL vector format
    const vectorString = `[${vector.join(',')}]`;
    
    await query(
      `
      INSERT INTO ai_documents (doc_id, source, content, metadata, embedding)
      VALUES ($1, $2, $3, $4, $5::vector)
      ON CONFLICT (doc_id)
      DO UPDATE SET source = EXCLUDED.source,
                    content = EXCLUDED.content,
                    metadata = EXCLUDED.metadata,
                    embedding = EXCLUDED.embedding
      `,
      [docId, source ?? null, content, JSON.stringify(metadata ?? {}), vectorString]
    );

    console.log("🚀 ~ try ~ query")
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Upsert error', err);
    return res.status(500).json({ error: 'Failed to upsert embedding' });
  }
}


