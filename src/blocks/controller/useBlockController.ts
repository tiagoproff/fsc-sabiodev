import { useRef, useState } from "react";

import type { BlockType } from "../../blocks/types/block.types";

const BLOCK_DELAY = 200;

export function useBlockController() {
  const [allBlocks, setAllBlocks] = useState<BlockType[]>([]);

  const [visibleBlocks, setVisibleBlocks] = useState<BlockType[]>([]);

  const currentIndexRef = useRef(0);

  function start(blocks: BlockType[]) {
    setAllBlocks(blocks);

    currentIndexRef.current = 0;

    if (blocks.length > 0) {
      setVisibleBlocks([blocks[0]]);
    }
  }

  function onBlockComplete() {
    const nextIndex = currentIndexRef.current + 1;

    if (nextIndex >= allBlocks.length) {
      return;
    }

    const nextBlock = allBlocks[nextIndex];

    currentIndexRef.current = nextIndex;

    setTimeout(() => {
      setVisibleBlocks((prev) => [...prev, nextBlock]);
    }, BLOCK_DELAY);
  }

  function reset() {
    setAllBlocks([]);
    setVisibleBlocks([]);
    currentIndexRef.current = 0;
  }

  return {
    visibleBlocks,
    start,
    onBlockComplete,
    reset,
  };
}
