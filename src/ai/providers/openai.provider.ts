import OpenAI from "openai";

import type { AIProvider, ChatMessage } from "../types/ai.types";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class OpenAIProvider implements AIProvider {
  async ask(messages: ChatMessage[]) {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages,
    });

    return completion.choices[0].message.content ?? "";
  }
}
