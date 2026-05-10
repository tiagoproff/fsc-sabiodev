import { GoogleGenerativeAI } from "@google/generative-ai";

import type { AIProvider, ChatMessage } from "../types/ai.types";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export class GeminiProvider implements AIProvider {
  async ask(messages: ChatMessage[]) {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = messages
      .map((message) => `${message.role}: ${message.content}`)
      .join("\n");

    const result = await model.generateContent(prompt);

    return result.response.text();
  }
}
