import { OpenRouterProvider } from "../providers/openrouter.provider";
import type { ChatMessage } from "../types/ai.types";

const provider = new OpenRouterProvider();

export async function askAI(messages: ChatMessage[]) {
  return provider.ask(messages);
}
