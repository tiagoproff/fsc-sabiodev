import { Application, Assets } from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi-v8";

import type { AvatarState } from "../types/avatar.types";

export class PixiAvatarAdapter {
  private app: Application | null = null;
  private spine: Spine | null = null;
  private mounted = false;

  async mount(container: HTMLElement) {
    if (this.mounted && this.app) {
      return;
    }

    try {
      this.app = new Application();

      await this.app.init({
        width: 300,
        height: 300,
        backgroundAlpha: 0,
        antialias: true,
        preference: "webgl",
      });

      if (container.contains(this.app.canvas)) {
        this.mounted = true;

        return;
      }

      container.appendChild(this.app.canvas);

      // LOAD ASSETS
      Assets.add({
        alias: "avatarData",
        src: "/avatar/skeleton.json",
      });

      Assets.add({
        alias: "avatarAtlas",
        src: "/avatar/skeleton.atlas",
      });

      await Assets.load(["avatarData", "avatarAtlas"]);

      // CREATE SPINE
      this.spine = Spine.from({
        skeleton: "avatarData",
        atlas: "avatarAtlas",
      });

      // POSITION
      this.spine.x = 150;
      this.spine.y = 280;
      this.spine.scale.set(0.2);

      // DEFAULT ANIMATION
      this.spine.state.setAnimation(0, "idle", true);

      // ADD TO STAGE
      this.app.stage.addChild(this.spine);
      this.mounted = true;
    } catch (error) {
      console.error(error);
    }
  }

  setState(state: AvatarState) {
    if (!this.spine) {
      return;
    }

    this.spine.state.clearTracks();
    this.spine.state.setAnimation(0, state, true);
  }

  destroy() {
    // React StrictMode
  }
}
