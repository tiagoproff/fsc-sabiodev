interface TextBlockProps {
  readonly content: string;
}

export function TextBlock({ content }: TextBlockProps) {
  return <p>{content}</p>;
}
