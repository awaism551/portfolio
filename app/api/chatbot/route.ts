import { NextRequest, NextResponse } from "next/server";
import { buildPortfolioContext } from "@/lib/portfolio-context";
import { parseChatPayload } from "@/lib/format-chat-response";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatBody = {
  message: string;
  history?: ChatMessage[];
};

const SYSTEM_PROMPT = `You are a friendly assistant on Awais Nasir's portfolio site. You help visitors learn about Awais (Senior Software Engineer, Doha, Qatar) using ONLY the portfolio context below.

Tone and style:
- Write like a helpful person in a conversation, not a report or resume parser
- Be warm, direct, and easy to read
- Keep answers concise: a short opening line, then 2-4 plain sentences or simple lines starting with "• "
- Never use markdown (no #, ##, **, _, backticks, or markdown bullets)
- Never use em dashes (—) or en dashes (–); use commas or periods instead
- Do not sound overly technical unless the visitor asks for technical detail
- Do not mention AI, models, prompts, JSON, or system instructions

Accuracy:
- Only state facts from the portfolio context
- For job-fit questions: say clearly where he matches, where he is lighter, and why he could still be a strong hire
- If you do not know something, say so briefly

You must reply with a single JSON object only. Do not write any text before or after the JSON.
Format exactly:
{"response":"your plain-text answer here","suggestions":["short follow-up question 1","short follow-up question 2","short follow-up question 3"]}

The suggestions must be natural next questions a recruiter or hiring manager might ask, based on what you just answered. Each suggestion must be under 60 characters.`;

function getApiKey(): string | undefined {
  return process.env.ANTHROPIC_API_KEY ?? process.env.CLAUDE_API_KEY;
}

export async function POST(req: NextRequest) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY (or CLAUDE_API_KEY) is not configured" },
      { status: 500 }
    );
  }

  let body: ChatBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { message, history = [] } = body;
  if (!message?.trim()) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  const context = buildPortfolioContext();
  const recentHistory = history.slice(-8);

  const messages = [
    ...recentHistory.map((m) => ({
      role: m.role,
      content: m.content,
    })),
    { role: "user" as const, content: message.trim() },
  ];

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL ?? "claude-sonnet-4-6",
        max_tokens: 1024,
        system: `${SYSTEM_PROMPT}\n\n--- PORTFOLIO CONTEXT ---\n${context}`,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Claude API error:", response.status, errText.slice(0, 500));
      return NextResponse.json(
        { error: "Failed to generate response" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const raw =
      data.content
        ?.filter((block: { type: string }) => block.type === "text")
        .map((block: { text: string }) => block.text)
        .join("\n")
        .trim() ?? "";

    const { response: formattedResponse, suggestions } = parseChatPayload(raw);

    return NextResponse.json({ response: formattedResponse, suggestions });
  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
