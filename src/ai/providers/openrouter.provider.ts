import OpenAI from "openai";

import type { AIProvider, ChatMessage } from "../types/ai.types";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export class OpenRouterProvider implements AIProvider {
  async ask(messages: ChatMessage[]) {
    const completion = await client.chat.completions.create({
      model: "openrouter/free",

      messages,
    });

    return completion.choices[0].message.content ?? "";
  }
}
