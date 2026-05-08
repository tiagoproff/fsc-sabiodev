import { useEffect } from "react";

import { BlockRenderer } from "./blocks/components/BlockRenderer";
import { useBlockController } from "./blocks/controller/useBlockController";
import { markdownToBlocks } from "./blocks/parser/markdownToBlocks";

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

  useEffect(() => {
    const blocks = markdownToBlocks(markdown);

    start(blocks);

    return () => {};
  }, [start]);

  return (
    <div>
      <BlockRenderer blocks={visibleBlocks} onBlockComplete={onBlockComplete} />
    </div>
  );
}
