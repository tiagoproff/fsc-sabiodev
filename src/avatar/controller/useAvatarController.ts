import { useCallback, useState } from "react";
import { PixiAvatarAdapter } from "../adapters/pixi.adapter";

import type { AvatarState } from "../types/avatar.types";
import type { AvatarController } from "../types/avatarController.types";

const adapter = new PixiAvatarAdapter();

export function useAvatarController(): AvatarController {
  const [state, setState] = useState<AvatarState>("idle");

  const mount = useCallback((container: HTMLElement) => {
    adapter.mount(container);
  }, []);

  const destroy = useCallback(() => {
    adapter.destroy();
  }, []);

  const setIdle = useCallback(() => {
    setState("idle");

    adapter.setState("idle");
  }, []);

  const setThinking = useCallback(() => {
    setState("thinking");

    adapter.setState("thinking");
  }, []);

  const setTalking = useCallback(() => {
    setState("talking");

    adapter.setState("talking");
  }, []);

  return {
    state,
    mount,
    destroy,
    setIdle,
    setThinking,
    setTalking,
  };
}
