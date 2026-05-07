interface CodeBlockProps {
  readonly content: string;
}

export function CodeBlock({ content }: CodeBlockProps) {
  return (
    <pre>
      <code>{content}</code>
    </pre>
  );
}
