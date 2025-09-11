## Embeddings store (pgvector)

1) Enable extension and create tables

Create a database (e.g. `portfolio_ai`) and run the SQL below:

```sql
-- 01_enable_pgvector.sql
CREATE EXTENSION IF NOT EXISTS vector;

-- 02_create_embeddings.sql
CREATE TABLE IF NOT EXISTS ai_documents (
  id SERIAL PRIMARY KEY,
  doc_id TEXT UNIQUE NOT NULL,
  source TEXT,
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  embedding vector(1536) -- adjust to the embedding model dimension
);

-- Similarity search index (optional but recommended)
CREATE INDEX IF NOT EXISTS ai_documents_embedding_ivfflat
  ON ai_documents USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);
```

2) Environment variables

Add to `.env.local`:

```
OPENAI_API_KEY=...
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DB
PGSSLMODE=require # if using managed Postgres that enforces SSL
```

3) Notes

- `vector(1536)` matches `text-embedding-3-small`. Change to 3072 for `text-embedding-3-large`.
- Rebuild the IVFFLAT index after large batch inserts: `REINDEX INDEX ai_documents_embedding_ivfflat;`
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
