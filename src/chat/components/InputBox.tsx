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
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        {...props}
      />
      <button disabled={disabled} onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
