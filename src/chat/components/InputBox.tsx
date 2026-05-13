import { useState } from "react";

import { useChat } from "../context/ChatContext";

interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onSend: (text: string) => void;
  onStop(): void;
}

export function InputBox({
  onSend,
  onStop,
  inputProps,
  buttonProps,
  ...props
}: Readonly<InputBoxProps>) {
  const [text, setText] = useState("");
  const chat = useChat();
  const isIdle = chat.status === "idle";
  const isDisabled = !isIdle;
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
    <div {...props}>
      <input
        value={text}
        disabled={isDisabled}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleKeyDown}
        {...inputProps}
      />
      <button disabled={isDisabled} onClick={handleClick} {...buttonProps}>
        {buttonLabel}
      </button>
    </div>
  );
}
