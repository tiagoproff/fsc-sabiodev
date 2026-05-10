import { GeminiProvider } from "../providers/gemini.provider";
import type { ChatMessage } from "../types/ai.types";

const provider = new GeminiProvider();

export async function askAI(messages: ChatMessage[]) {
  return provider.ask(messages);
}
