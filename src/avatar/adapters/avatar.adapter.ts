import type { AvatarState } from "../types/avatar.types";

export interface AvatarAdapter {
  setState(state: AvatarState): void;

  destroy(): void;
}
