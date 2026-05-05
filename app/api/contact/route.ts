import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!message) {
    return NextResponse.json({ error: "Missing message" }, { status: 400 });
  }

  const prompt = `
You are an assistant for a premium architecture studio.

User info:
Name: ${name}
Email: ${email}
Message: ${message}

Write a short professional auto-reply email response (100-150 words).
Tone: luxury, calm, professional, Apple-style.
Do NOT be robotic.
Include that we will respond within 24–48 hours.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const aiReply = response.choices[0]?.message?.content;

  return NextResponse.json({
    reply: aiReply,
  });
}