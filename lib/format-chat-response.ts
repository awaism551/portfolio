const DEFAULT_FOLLOW_UPS = [
  "What kind of roles is he open to?",
  "Which project best shows his full-stack skills?",
  "How can I reach out to him?",
];

type ChatPayload = {
  response: string;
  suggestions: string[];
};

function stripCodeFences(text: string): string {
  return text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
}

function isChatPayload(value: unknown): value is { response: string; suggestions?: unknown } {
  return (
    typeof value === "object" &&
    value !== null &&
    "response" in value &&
    typeof (value as { response: unknown }).response === "string"
  );
}

function normalizePayload(parsed: { response: string; suggestions?: unknown }): ChatPayload {
  const response = formatChatResponse(parsed.response);
  const suggestions = Array.isArray(parsed.suggestions)
    ? parsed.suggestions
        .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
        .slice(0, 3)
    : [];

  return {
    response,
    suggestions: suggestions.length ? suggestions : DEFAULT_FOLLOW_UPS,
  };
}

/** Walk from `start` and parse the first balanced `{...}` object. */
function parseJsonObjectAt(text: string, start: number): unknown | null {
  if (text[start] !== "{") return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i++) {
    const ch = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(text.slice(start, i + 1));
        } catch {
          return null;
        }
      }
    }
  }

  return null;
}

function findEmbeddedJsonPayload(text: string): ChatPayload | null {
  let searchFrom = 0;

  while (searchFrom < text.length) {
    const idx = text.indexOf('{"response"', searchFrom);
    if (idx === -1) break;

    const parsed = parseJsonObjectAt(text, idx);
    if (isChatPayload(parsed)) {
      return normalizePayload(parsed);
    }

    searchFrom = idx + 1;
  }

  // Also try with whitespace after opening brace
  const looseMatch = text.match(/\{\s*"response"\s*:/);
  if (looseMatch?.index !== undefined) {
    const parsed = parseJsonObjectAt(text, looseMatch.index);
    if (isChatPayload(parsed)) {
      return normalizePayload(parsed);
    }
  }

  return null;
}

function stripEmbeddedJson(text: string): string {
  const idx = text.indexOf('{"response"');
  if (idx === -1) {
    const looseMatch = text.match(/\{\s*"response"\s*:/);
    if (looseMatch?.index !== undefined) {
      return text.slice(0, looseMatch.index).trim();
    }
    return text.trim();
  }
  return text.slice(0, idx).trim();
}

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

export function parseChatPayload(raw: string): ChatPayload {
  const stripped = stripCodeFences(raw);

  try {
    const parsed = JSON.parse(stripped);
    if (isChatPayload(parsed)) {
      return normalizePayload(parsed);
    }
  } catch {
    // not pure JSON — model may have prefixed plain text before the JSON block
  }

  const embedded = findEmbeddedJsonPayload(stripped);
  if (embedded) {
    return embedded;
  }

  const withoutJson = stripEmbeddedJson(stripped);
  return {
    response: formatChatResponse(withoutJson || stripped),
    suggestions: DEFAULT_FOLLOW_UPS,
  };
}

export { DEFAULT_FOLLOW_UPS };
