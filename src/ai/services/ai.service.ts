import { OpenAIProvider } from "../providers/openai.provider";
import type { ChatMessage } from "../types/ai.types";

const provider = new OpenAIProvider();

export async function askAI(messages: ChatMessage[]) {
  return provider.ask(messages);
}
