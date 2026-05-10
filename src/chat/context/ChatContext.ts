import { createContext, useContext } from "react";

import type { ChatStatus } from "../types/chat.types";

export type ChatController = {
  status: ChatStatus;

  setIdle(): void;
  setThinking(): void;
  setResponding(): void;
};

export const ChatContext = createContext<ChatController | null>(null);

export function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used inside ChatProvider");
  }

  return context;
}
