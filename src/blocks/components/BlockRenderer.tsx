import { memo } from "react";
import { TextBlock } from "./blocks/TextBlock";
import { CodeBlock } from "./blocks/CodeBlock";
import { ListBlock } from "./blocks/ListBlock";
import type { BlockType } from "../types/block.types";

type BlockRendererProps = {
  readonly blocks: BlockType[];

  readonly onBlockComplete: () => void;
};

export const BlockRenderer = memo(function ({
  blocks,
  onBlockComplete,
}: BlockRendererProps) {
  const handleComplete = () => {
    console.log("complete");
    onBlockComplete();
  };

  return (
    <div>
      {blocks.map((block) => {
        switch (block.type) {
          case "text":
            return (
              <TextBlock
                key={block.id}
                {...block}
                onComplete={handleComplete}
              />
            );

          case "code":
            return (
              <CodeBlock
                key={block.id}
                {...block}
                onComplete={handleComplete}
              />
            );

          case "list":
            return (
              <ListBlock
                key={block.id}
                {...block}
                onComplete={handleComplete}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
});
