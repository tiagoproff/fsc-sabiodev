import { BlockRenderer } from "../../../blocks/components/BlockRenderer";
import type { Message } from "../../types/message.types";

type AssistantMessageProps = {
  readonly message: Message;

  readonly onBlockComplete: () => void;
};

export function AssistantMessage({
  message,
  onBlockComplete,
}: AssistantMessageProps) {
  return (
    <div>
      <BlockRenderer
        blocks={message.blocks}
        onBlockComplete={onBlockComplete}
      />
    </div>
  );
}
