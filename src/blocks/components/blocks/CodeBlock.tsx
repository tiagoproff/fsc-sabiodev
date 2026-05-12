import { useEffect } from "react";
import type { CodeBlockComponent } from "../../types/blockComponent.types";

export function CodeBlock({
  content,
  onComplete,
  ...props
}: CodeBlockComponent) {
  useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  return (
    <pre {...props}>
      <code>{content}</code>
    </pre>
  );
}
