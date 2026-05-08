import type {
  CodeBlockType,
  ListBlockType,
  TextBlockType,
} from "../../blocks/types/block.types";

export type BlockComponentBase = {
  onComplete: () => void;
};

export type TextBlockComponent = TextBlockType & BlockComponentBase;
export type CodeBlockComponent = CodeBlockType & BlockComponentBase;
export type ListBlockComponent = ListBlockType & BlockComponentBase;

export type BlockComponent =
  | TextBlockComponent
  | CodeBlockComponent
  | ListBlockComponent;
