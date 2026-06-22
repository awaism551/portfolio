/**
 * Server-only Claude env vars.
 * Use dot notation so Next.js inlines values from .env.production at build time (required for Amplify SSR).
 */
export function getClaudeApiKey(): string | undefined {
  return process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY;
}

export function getClaudeModel(): string {
  return process.env.CLAUDE_MODEL || "claude-sonnet-4-6";
}
