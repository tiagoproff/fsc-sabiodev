import { UserMessage } from "../messages/UserMessage";
import { AssistantMessage } from "../messages/AssistantMessage";
import type { Message } from "../../types/message.types";

import styles from "./MessageList.module.scss";

type MessageListProps = {
  readonly messages: Message[];
  readonly onComplete: () => void;
};

export function MessageList({ messages, onComplete }: MessageListProps) {
  return (
    <div className={styles.container}>
      {messages.map((message) => {
        if (message.role === "user") {
          return <UserMessage key={message.id} message={message} />;
        }

        return (
          <AssistantMessage
            key={message.id}
            message={message}
            onComplete={onComplete}
          />
        );
      })}
    </div>
  );
}
