import { useEffect } from "react";
import type { ListBlockComponent } from "../../types/blockComponent.types";

export function ListBlock({ content, onComplete }: ListBlockComponent) {
  useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  return (
    <ul>
      {content.map((item, index) => {
        const itemId = `list-item-${index}`;

        if (!item) return null;

        return <li key={itemId}>{item}</li>;
      })}
    </ul>
  );
}
