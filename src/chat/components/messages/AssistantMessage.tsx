import { memo, useCallback, useEffect, useRef, useState } from "react";

import { BlockRenderer } from "../../../blocks/components/BlockRenderer";
import type { BlockType } from "../../../blocks/types/block.types";
import type { Message } from "../../../chat/types/message.types";

type AssistantMessageProps = {
  readonly message: Message;
};

const BLOCK_DELAY = 300;

function AssistantMessageComponent({ message }: AssistantMessageProps) {
  const queueRef = useRef<BlockType[]>([]);
  const currentIndexRef = useRef(0);
  const [renderedBlocks, setRenderedBlocks] = useState<BlockType[]>(() => {
    const firstBlock = message.blocks[0];

    return firstBlock ? [firstBlock] : [];
  });

  const appendNextBlock = useCallback(() => {
    const nextIndex = currentIndexRef.current + 1;
    const nextBlock = queueRef.current[nextIndex];

    if (!nextBlock) {
      return;
    }

    currentIndexRef.current = nextIndex;

    setTimeout(() => {
      setRenderedBlocks((prev) => [...prev, nextBlock]);
    }, BLOCK_DELAY);
  }, []);

  useEffect(() => {
    queueRef.current = message.blocks;

    currentIndexRef.current = 0;
  }, [message.blocks]);

  return (
    <div>
      <BlockRenderer
        blocks={renderedBlocks}
        onBlockComplete={appendNextBlock}
      />
    </div>
  );
}

export const AssistantMessage = memo(AssistantMessageComponent);
