const DEFAULT_FOLLOW_UPS = [
  "What kind of roles is he open to?",
  "Which project best shows his full-stack skills?",
  "How can I reach out to him?",
];

export function formatChatResponse(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .replace(/^[-*]\s+/gm, "• ")
    .replace(/—/g, ",")
    .replace(/–/g, "-")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function parseChatPayload(raw: string): {
  response: string;
  suggestions: string[];
} {
  const stripped = raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  try {
    const parsed = JSON.parse(stripped);
    const response =
      typeof parsed.response === "string" ? formatChatResponse(parsed.response) : "";
    const suggestions = Array.isArray(parsed.suggestions)
      ? parsed.suggestions
          .filter((s: unknown): s is string => typeof s === "string" && s.trim().length > 0)
          .slice(0, 3)
      : [];

    if (response) {
      return { response, suggestions: suggestions.length ? suggestions : DEFAULT_FOLLOW_UPS };
    }
  } catch {
    // fall through to plain-text handling
  }

  return {
    response: formatChatResponse(raw),
    suggestions: DEFAULT_FOLLOW_UPS,
  };
}

export { DEFAULT_FOLLOW_UPS };
