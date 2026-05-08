import { useEffect } from "react";
import { BlockRenderer } from "./blocks/components/BlockRenderer";
import { useBlockController } from "./blocks/controller/useBlockController";
import type { BlockType } from "./blocks/types/block.types";

const blocks: BlockType[] = [
  {
    id: "1",
    type: "text",
    content: "Olá viajante.",
  },

  {
    id: "2",
    type: "text",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

  {
    id: "3",
    type: "text",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },

  {
    id: "4",
    type: "list",
    content: ["Use cache", "Evite rerender"],
  },

  {
    id: "5",
    type: "code",
    content: "const wisdom = true;",
  },
];

export default function App() {
  const { visibleBlocks, start, onBlockComplete } = useBlockController();

  useEffect(() => {
    start(blocks);

    return () => {};
  }, [start]);

  return (
    <div>
      <BlockRenderer blocks={visibleBlocks} onBlockComplete={onBlockComplete} />
    </div>
  );
}
