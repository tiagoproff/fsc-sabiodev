import type { BlockType } from "../../blocks/types/block.types";

export type Message = {
  id: string;
  role: "user" | "assistant";

  blocks: BlockType[];
};
