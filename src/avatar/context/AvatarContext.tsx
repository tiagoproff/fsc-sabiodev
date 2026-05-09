import { createContext, useContext } from "react";

import type { AvatarController } from "../types/avatarController.types";

export const AvatarContext = createContext<AvatarController | null>(null);

export function useAvatar() {
  const context = useContext(AvatarContext);

  if (!context) {
    throw new Error("useAvatar must be used inside AvatarProvider");
  }

  return context;
}
