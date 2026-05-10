import type { AvatarState } from "./avatar.types";

export type AvatarController = {
  state: AvatarState;

  mount(container: HTMLElement): void;
  destroy(): void;
  setIdle(): void;
  setThinking(): void;
  setTalking(): void;
};
