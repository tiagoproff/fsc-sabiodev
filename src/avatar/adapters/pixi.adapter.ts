import type { AvatarAdapter } from "./avatar.adapter";

import type { AvatarState } from "../types/avatar.types";

export class PixiAvatarAdapter implements AvatarAdapter {
  private state: AvatarState = "idle";

  setState(state: AvatarState) {
    this.state = state;

    console.log("Avatar state:", this.state);
  }

  destroy() {
    console.log("Destroy avatar");
  }
}
