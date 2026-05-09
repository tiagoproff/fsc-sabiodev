import { useCallback, useEffect, useRef, useState } from "react";

import { PixiAvatarAdapter } from "../adapters/pixi.adapter";
import type { AvatarState } from "../types/avatar.types";
import type { AvatarController } from "../types/avatarController.types";

export function useAvatarController(): AvatarController {
  const [state, setState] = useState<AvatarState>("idle");

  const adapterRef = useRef(new PixiAvatarAdapter());

  const updateState = useCallback((nextState: AvatarState) => {
    setState(nextState);

    adapterRef.current.setState(nextState);
  }, []);

  const setIdle = useCallback(() => {
    updateState("idle");
  }, [updateState]);

  const setThinking = useCallback(() => {
    updateState("thinking");
  }, [updateState]);

  const setTalking = useCallback(() => {
    updateState("talking");
  }, [updateState]);

  useEffect(() => {
    const adapter = adapterRef.current;

    return () => {
      adapter.destroy();
    };
  }, []);

  return {
    state,
    setIdle,
    setThinking,
    setTalking,
  };
}
