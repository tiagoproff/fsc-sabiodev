import type { PropsWithChildren } from "react";

import { AvatarContext } from "./AvatarContext";

import { useAvatarController } from "../controller/useAvatarController";

export function AvatarProvider({ children }: Readonly<PropsWithChildren>) {
  const avatar = useAvatarController();

  return (
    <AvatarContext.Provider value={avatar}>{children}</AvatarContext.Provider>
  );
}
