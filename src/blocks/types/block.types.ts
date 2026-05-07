export type TextBlock = {
  id: string;
  type: "text";
  content: string;
};

export type CodeBlock = {
  id: string;
  type: "code";
  content: string;
};

export type ListBlock = {
  id: string;
  type: "list";
  items: string[];
};

export type Block = TextBlock | CodeBlock | ListBlock;
