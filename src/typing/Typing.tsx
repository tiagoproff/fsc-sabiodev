import { useEffect, useState } from "react";

type TypingProps = {
  readonly text: string;
  readonly speed?: number;
  readonly onComplete?: () => void;
};

export function Typing({ text, speed = 120, onComplete }: TypingProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const words = text.split(" ");

    let index = 0;
    let current = "";
    let timeoutId: ReturnType<typeof setTimeout>;

    function type() {
      if (index >= words.length) {
        onComplete?.();
        return;
      }

      current += (index === 0 ? "" : " ") + words[index];

      setDisplayed(current);

      let delay = speed + Math.random() * 1;

      if (words[index].endsWith(".")) {
        delay += 300;
      }

      if (words[index].endsWith(",")) {
        delay += 150;
      }

      index++;

      timeoutId = setTimeout(type, delay);
    }

    type();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, onComplete]);

  return <span>{displayed}</span>;
}
