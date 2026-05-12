import { useEffect } from "react";
import type { ListBlockComponent } from "../../types/blockComponent.types";

export function ListBlock({
  content,
  onComplete,
  ...props
}: ListBlockComponent) {
  useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  return (
    <ul {...props}>
      {content.map((item, index) => {
        const itemId = `list-item-${index}`;

        if (!item) return null;

        return <li key={itemId}>{item}</li>;
      })}
    </ul>
  );
}
