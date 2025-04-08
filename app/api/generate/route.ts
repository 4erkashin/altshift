import { buildPrompt } from '@/lib/openai';
import { openai } from '@/lib/openai/client';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const body = await req.json();

  const prompt = buildPrompt(body);
  console.log('[api/generate] prompt:', prompt);

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  const result = response.choices[0].message?.content ?? '';

  return NextResponse.json({ result });
};
