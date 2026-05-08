import type { Message } from "../../types/message.types";

type UserMessageProps = {
  readonly message: Message;
};

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div>
      {message.blocks.map((block) => {
        if (block.type === "text") {
          return <p key={block.id}>{block.content}</p>;
        }

        return null;
      })}
    </div>
  );
}
