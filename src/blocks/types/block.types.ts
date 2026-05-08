type Block = {
  id: string;
  content: string;
};

export type TextBlockType = Block & {
  type: "text";
};

export type CodeBlockType = Block & {
  type: "code";
};

export type ListBlockType = Omit<Block, "content"> & {
  type: "list";
  content: string[];
};

export type BlockType = TextBlockType | CodeBlockType | ListBlockType;
