import { useState } from "react";

import { useChat } from "../context/ChatContext";

interface InputBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  onSend: (text: string) => void;
  onStop(): void;
}

export function InputBox({
  onSend,
  onStop,
  ...props
}: Readonly<InputBoxProps>) {
  const [text, setText] = useState("");
  const chat = useChat();
  const isIdle = chat.status === "idle";
  const buttonLabel = isIdle ? "Enviar" : "Stop";

  const handleSend = () => {
    const textTrimmed = text.trim();

    if (textTrimmed.trim() == "") return;

    onSend(textTrimmed);
    setText("");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!isIdle) {
      onStop();
      return;
    }

    handleSend();
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div>
      <input
        value={text}
        disabled={!isIdle}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <button onClick={handleClick}>{buttonLabel}</button>
    </div>
  );
}
