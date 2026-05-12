import { memo } from "react";

import { TextBlock } from "./blocks/TextBlock";
import { CodeBlock } from "./blocks/CodeBlock";
import { ListBlock } from "./blocks/ListBlock";
import type { BlockType } from "../types/block.types";

type BlockStyles = Record<"root" | BlockType["type"], CSSModuleClasses[string]>;

type BlockRendererProps = {
  readonly blocks: BlockType[];
  readonly blockStyles: BlockStyles;
  readonly onBlockComplete: () => void;
};

export const BlockRenderer = memo(function ({
  blocks,
  blockStyles,
  onBlockComplete,
}: BlockRendererProps) {
  const handleComplete = () => {
    console.log("complete");
    onBlockComplete();
  };

  return (
    <div className={blockStyles.root}>
      {blocks.map((block) => {
        switch (block.type) {
          case "text":
            return (
              <TextBlock
                key={block.id}
                {...block}
                className={blockStyles.text}
                onComplete={handleComplete}
              />
            );

          case "code":
            return (
              <CodeBlock
                key={block.id}
                {...block}
                className={blockStyles.code}
                onComplete={handleComplete}
              />
            );

          case "list":
            return (
              <ListBlock
                key={block.id}
                {...block}
                className={blockStyles.list}
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
