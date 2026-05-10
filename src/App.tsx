import { useState } from "react";

import { markdownToBlocks } from "./blocks/parser/markdownToBlocks";
import { MessageList } from "./chat/components/MessageList";
import { InputBox } from "./chat/components/InputBox";
import { createId } from "./shared/utils/createId";
import { askAssistant } from "./chat/service/chatService";
import { Avatar } from "./avatar/components/Avatar";
import { useAvatar } from "./avatar/context/AvatarContext";
import type { Message } from "./chat/types/message.types";
import { useChat } from "./chat/context/ChatContext";

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const chat = useChat();
  const avatar = useAvatar();
  const userId = createId();
  const assistantId = createId();
  const userBlockId = createId();

  function handleAssistantComplete() {
    chat.setIdle();
    avatar.setIdle();
  }

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

    chat.setThinking();
    avatar.setThinking();

    const markdown = await askAssistant(text);

    chat.setThinking();
    avatar.setTalking();

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
      <Avatar />
      <MessageList messages={messages} onComplete={handleAssistantComplete} />
      <InputBox onSend={handleSend} />
    </div>
  );
}
