import type { TextBlockComponent } from "../../types/blockComponent.types";
import { Typing } from "../../../typing/Typing";

export function TextBlock({ content, onComplete }: TextBlockComponent) {
  return (
    <p>
      <Typing onComplete={onComplete} speed={1} text={content} />
    </p>
  );
}
