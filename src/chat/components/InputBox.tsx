import { useState } from "react";

interface InputBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function InputBox({
  onSend,
  disabled,
  ...props
}: Readonly<InputBoxProps>) {
  const [text, setText] = useState("");

  const handleSend = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const textTrimmed = text.trim();

    if (textTrimmed.trim() == "") return;

    onSend(textTrimmed);

    setText("");
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSend(event as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <button disabled={disabled} onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
