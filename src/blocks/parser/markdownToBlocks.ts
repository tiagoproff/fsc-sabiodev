import { unified } from "unified";
import remarkParse from "remark-parse";

import type { BlockType } from "../../blocks/types/block.types";
import { createId } from "../../shared/utils/createId";

type TextNode = { value?: string };
type ListItemNode = { children?: Array<{ children?: TextNode[] }> };

export function markdownToBlocks(markdown: string): BlockType[] {
  const tree = unified().use(remarkParse).parse(markdown);
  const blocks: BlockType[] = [];

  for (const node of tree.children) {
    if (node.type === "paragraph") {
      const content =
        node.children
          ?.map((child) => ("value" in child ? child.value : ""))
          .join("") || "";

      if (content.trim()) {
        blocks.push({
          id: createId(),
          type: "text",
          content,
        });
      }
    }

    if (node.type === "code") {
      blocks.push({
        id: createId(),
        type: "code",
        content: node.value || "",
      });
    }

    if (node.type === "list") {
      const content =
        node.children
          ?.map((item) => {
            const listItem = item as ListItemNode;

            return listItem.children?.[0]?.children
              ?.map((child: TextNode) => child.value || "")
              .join("");
          })
          .filter((item) => item !== undefined) || [];

      blocks.push({
        id: createId(),
        type: "list",
        content,
      });
    }
  }

  return blocks;
}
