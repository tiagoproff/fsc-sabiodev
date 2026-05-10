import { useCallback, useState } from "react";

import { useAvatar } from "../../avatar/context/AvatarContext";
import { useChat } from "../context/ChatContext";
import { markdownToBlocks } from "../../blocks/parser/markdownToBlocks";
import { createId } from "../../shared/utils/createId";
import { askAI } from "../../ai/services/ai.service";

import type { Message } from "../types/message.types";

export function useChatController() {
  const [messages, setMessages] = useState<Message[]>([]);
  const avatar = useAvatar();
  const chat = useChat();

  const handleAssistantComplete = useCallback(() => {
    chat.setIdle();
    avatar.setIdle();
  }, [avatar, chat]);

  const handleStop = useCallback(() => {
    chat.setIdle();
    avatar.setIdle();
  }, [avatar, chat]);

  const handleSend = useCallback(
    async (text: string) => {
      const userMessage: Message = {
        id: createId(),
        role: "user",
        blocks: [
          {
            id: createId(),
            type: "text",
            content: text,
          },
        ],
      };

      setMessages((prev) => [...prev, userMessage]);

      chat.setThinking();
      avatar.setThinking();

      const response = await askAI([
        {
          role: "system",
          content: "Você é um avatar amigável.",
        },

        {
          role: "user",
          content: text,
        },
      ]);

      chat.setResponding();
      avatar.setTalking();

      const assistantMessage: Message = {
        id: createId(),
        role: "assistant",
        blocks: markdownToBlocks(response),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    },
    [avatar, chat],
  );

  return {
    messages,
    handleSend,
    handleStop,
    handleAssistantComplete,
  };
}
