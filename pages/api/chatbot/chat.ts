import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatOpenAI } from '@langchain/openai';

type ChatBody = {
  message: string;
  topK?: number;
};

const SYSTEM_PROMPT = `You are an AI assistant representing Awais Nasir, a Senior Software Engineer based in Doha, Qatar. Your job is to provide accurate and engaging information about him to help potential employers, recruiters, or collaborators understand his expertise and value.

Key guidelines:
- Provide accurate information based only on the context provided
- Highlight his technical skills, project experience, and achievements
- Be enthusiastic and professional when discussing his capabilities
- If you don't have specific information, politely say so rather than making assumptions
- Focus on his strengths: full-stack development, team leadership, modern tech stack expertise
- Mention his experience with React, Angular, Node.js, Python, PostgreSQL, AWS, and other technologies
- Emphasize his consulting experience and successful project deliveries
- If the user seems like a recruiter, highlight his availability and eagerness for new opportunities

Always maintain a professional yet friendly tone that reflects well on Awais Nasir.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, topK = 3 }: ChatBody = req.body || {};
  if (!message) {
    return res.status(400).json({ error: 'message is required' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OPENAI_API_KEY not configured' });
  }

  try {
    // Step 1: Get relevant context from vector database
    const contextResponse = await fetch(`${req.headers.origin || 'http://localhost:3000'}/api/embeddings/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: message, topK }),
    });

    if (!contextResponse.ok) {
      throw new Error('Failed to fetch context from vector database');
    }

    const { results } = await contextResponse.json();
    
    // Step 2: Prepare context for LLM
    const context = results
      .map((result: any) => result.content)
      .join('\n\n');

    // Step 3: Generate response using OpenAI
    const llm = new ChatOpenAI({
      model: 'gpt-4o',
      temperature: 0.7,
      maxTokens: 500,
    });

    const prompt = `${SYSTEM_PROMPT}

Context about Awais Nasir:
${context}

User Question: ${message}

Please provide a helpful and engaging response based on the context above.`;

    const response = await llm.invoke(prompt);
    
    // Step 4: Format response for better readability
    const formattedResponse = formatResponse(response.content as string);

    return res.status(200).json({ 
      response: formattedResponse,
      sources: results.map((r: any) => ({
        docId: r.doc_id,
        source: r.source,
        similarity: r.similarity
      }))
    });

  } catch (err: any) {
    console.error('Chat error', err);
    return res.status(500).json({ 
      error: 'Failed to generate response',
      message: 'I apologize, but I\'m having trouble processing your request right now. Please try again in a moment.'
    });
  }
}

function formatResponse(text: string): string {
  // Basic formatting for better readability
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove markdown bold
    .replace(/\*(.*?)\*/g, '$1')     // Remove markdown italic
    .replace(/\n\n/g, '\n')          // Reduce excessive line breaks
    .trim();
}
