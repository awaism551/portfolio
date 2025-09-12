## AI-Powered Chatbot with pgvector

This portfolio includes an intelligent chatbot that can answer questions about Awais Nasir's experience, skills, and projects using vector embeddings and OpenAI's language models.

### Architecture Overview

The chatbot uses a **Retrieval-Augmented Generation (RAG)** approach:

1. **Vector Database**: pgvector stores document embeddings
2. **Vector Search**: Finds relevant context for user queries
3. **LLM Integration**: OpenAI GPT generates responses using retrieved context
4. **Real-time Chat**: React-based chat interface

### Setup Instructions

#### 1) Database Setup

Create a PostgreSQL database and enable pgvector:

```sql
-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create documents table
CREATE TABLE IF NOT EXISTS ai_documents (
  id SERIAL PRIMARY KEY,
  doc_id TEXT UNIQUE NOT NULL,
  source TEXT,
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  embedding vector(1536) -- OpenAI text-embedding-3-small dimension
);

-- Create similarity search index
CREATE INDEX IF NOT EXISTS ai_documents_embedding_ivfflat
  ON ai_documents USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);
```

#### 2) Environment Variables

Add to `.env.local`:

```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DB
PGSSLMODE=require # if using managed Postgres that enforces SSL
```

#### 3) Content Ingestion

Run the bulk ingestion script to populate the vector database:

```bash
# Start the development server
npm run dev

# In another terminal, run the ingestion script
node scripts/ingest-content.js
```

This will add:
- Personal information and experience summary
- Technical skills and technologies
- Detailed project descriptions (8 major projects)
- Career highlights and achievements

### How It Works

#### Query Flow

1. **User Input**: User types a question in the chatbot
2. **Vector Search**: Query is embedded and matched against stored documents
3. **Context Retrieval**: Top 3 most relevant documents are retrieved
4. **LLM Generation**: OpenAI GPT generates response using context + system prompt
5. **Response Delivery**: Formatted response is sent back to user

#### API Endpoints

- `POST /api/embeddings/upsert` - Store documents with embeddings
- `POST /api/embeddings/query` - Vector similarity search
- `POST /api/chatbot/chat` - Complete chat flow (search + LLM)

#### System Prompt

The AI assistant is configured with a professional system prompt that:
- Represents Awais Nasir accurately
- Highlights technical expertise and achievements
- Maintains professional yet engaging tone
- Encourages hiring/referral for recruiters

### Testing the Chatbot

1. **Start the application**: `npm run dev`
2. **Open the chatbot**: Click the chat icon in bottom-right corner
3. **Try sample queries**:
   - "What are Awais's technical skills?"
   - "Tell me about his React experience"
   - "What projects has he worked on?"
   - "Is he available for new opportunities?"

### Performance Notes

- **Embedding Model**: `text-embedding-3-small` (1536 dimensions)
- **LLM Model**: `gpt-3.5-turbo` (cost-effective, fast responses)
- **Vector Search**: Cosine similarity with IVFFLAT index
- **Context Window**: Top 3 most relevant documents per query
- **Response Time**: ~2-3 seconds for complete flow

### Maintenance

- **Rebuild Index**: After large batch inserts: `REINDEX INDEX ai_documents_embedding_ivfflat;`
- **Update Content**: Re-run ingestion script when portfolio content changes
- **Monitor Costs**: Track OpenAI API usage for embeddings and chat completions
## View project

[awais-nasir.com](https://www.awais-nasir.com)

## About the project

A personal portfolio website that showcases my feature projects, technical skill stack, contact information and more about me.


## Core dependencies

- [React](https://reactjs.org/) - A Javascript library for building user interfaces.
- [NextJS](https://nextjs.org/) - A React framework with hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
- [Material UI](https://material-ui.com/) - A React component-based design system.
- [Formik](https://www.npmjs.com/package/formik) - An open source form library for React and React Native.
- [Yup](https://www.npmjs.com/package/yup) - A JavaScript schema builder for value parsing and validation.
- [SendGrid/Mail](https://www.npmjs.com/package/@sendgrid/mail) - Send emails with Javascript.
- [React Icons](https://www.npmjs.com/package/react-icons) - Include popular icons in your React projects.
