interface ListBlockProps {
  readonly items: string[];
}

export function ListBlock({ items }: ListBlockProps) {
  return (
    <ul>
      {items.map((item, index) => {
        const itemId = `list-item-${index}`;

        if (!item) return null;

        return <li key={itemId}>{item}</li>;
      })}
    </ul>
  );
}
