import type { AvatarState } from "./avatar.types";

export type AvatarController = {
  state: AvatarState;
  setIdle(): void;
  setThinking(): void;
  setTalking(): void;
};
