import type { Message } from "../../../types/message.types";

import styles from "./UserMessage.module.scss";

type UserMessageProps = {
  readonly message: Message;
};

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className={styles.container}>
      {message.blocks.map((block) => {
        if (block.type === "text") {
          return (
            <p key={block.id} className={styles.text}>
              {block.content}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}
