import { useEffect } from "react";
import type { CodeBlockComponent } from "../../types/blockComponent.types";

export function CodeBlock({ content, onComplete }: CodeBlockComponent) {
  useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  return (
    <pre>
      <code>{content}</code>
    </pre>
  );
}
