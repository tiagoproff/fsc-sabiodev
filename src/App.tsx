import { useState } from "react";

import { markdownToBlocks } from "./blocks/parser/markdownToBlocks";
import { MessageList } from "./chat/components/MessageList";
import { InputBox } from "./chat/components/InputBox";
import { createId } from "./shared/utils/createId";
import { askAssistant } from "./chat/service/chatService";
import type { Message } from "./chat/types/message.types";

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const userId = createId();
  const assistantId = createId();
  const userBlockId = createId();

  async function handleSend(text: string) {
    const userMessage: Message = {
      id: userId,
      role: "user",
      blocks: [
        {
          id: userBlockId,
          type: "text",
          content: text,
        },
      ],
    };

    setMessages((prev) => [...prev, userMessage]);

    const markdown = await askAssistant(text);
    const assistantBlocks = markdownToBlocks(markdown);

    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      blocks: assistantBlocks,
    };

    setMessages((prev) => [...prev, assistantMessage]);
  }

  return (
    <div>
      <MessageList messages={messages} />
      <InputBox onSend={handleSend} />
    </div>
  );
}
