import { TextBlock } from "./blocks/TextBlock";
import { CodeBlock } from "./blocks/CodeBlock";
import { ListBlock } from "./blocks/ListBlock";

import type { Block } from "../types/block.types";

interface BlockRendererProps {
  readonly blocks: Block[];
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div>
      {blocks.map((block) => {
        switch (block.type) {
          case "text":
            return <TextBlock key={block.id} content={block.content} />;

          case "code":
            return <CodeBlock key={block.id} content={block.content} />;

          case "list":
            return <ListBlock key={block.id} items={block.items} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
