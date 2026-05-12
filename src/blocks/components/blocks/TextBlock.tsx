import { Typing } from "../../../typing/Typing";
import type { TextBlockComponent } from "../../types/blockComponent.types";

export function TextBlock({
  content,
  onComplete,
  ...props
}: TextBlockComponent) {
  return (
    <p {...props}>
      <Typing onComplete={onComplete} speed={1} text={content} />
    </p>
  );
}
