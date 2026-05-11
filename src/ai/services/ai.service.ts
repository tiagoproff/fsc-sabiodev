import { OpenRouterProvider } from "../providers/openrouter.provider";
import type { ChatMessage } from "../types/ai.types";
import { SABIODEV_SYSTEM_PROMPT } from "../prompts/sabiodev.system";

const provider = new OpenRouterProvider();

export async function askAI(messages: ChatMessage[]) {
  return provider.ask([
    {
      role: "system",
      content: SABIODEV_SYSTEM_PROMPT,
    },

    ...messages,
  ]);
}
