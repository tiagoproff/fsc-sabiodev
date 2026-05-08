import { useEffect } from "react";

import { useBlockController } from "./blocks/controller/useBlockController";
import { markdownToBlocks } from "./blocks/parser/markdownToBlocks";
import { MessageList } from "./chat/components/MessageList";
import { createId } from "./shared/utils/createId";
import type { Message } from "./chat/types/message.types";

const markdown = `
Olá viajante.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


- Aprenda React
- Evite rerender

\`\`\`ts
const wisdom = true;
\`\`\`
`;

export default function App() {
  const { visibleBlocks, start, onBlockComplete } = useBlockController();

  const userId = createId();
  const assistantId = createId();
  const userBlockId = createId();

  const messages: Message[] = [
    {
      id: userId,
      role: "user",
      blocks: [
        {
          id: userBlockId,
          type: "text",
          content: "Como evitar rerender?",
        },
      ],
    },
    {
      id: assistantId,
      role: "assistant",
      blocks: visibleBlocks,
    },
  ];

  useEffect(() => {
    const assistantBlocks = markdownToBlocks(markdown);
    start(assistantBlocks);
  }, [start]);

  return (
    <div>
      <MessageList messages={messages} onBlockComplete={onBlockComplete} />
    </div>
  );
}
