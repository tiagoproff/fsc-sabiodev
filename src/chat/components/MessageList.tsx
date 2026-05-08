import { UserMessage } from "./messages/UserMessage";
import { AssistantMessage } from "./messages/AssistantMessage";
import type { Message } from "../types/message.types";

type MessageListProps = {
  readonly messages: Message[];
};

export function MessageList({ messages }: MessageListProps) {
  return (
    <div>
      {messages.map((message) => {
        if (message.role === "user") {
          return <UserMessage key={message.id} message={message} />;
        }

        return <AssistantMessage key={message.id} message={message} />;
      })}
    </div>
  );
}
