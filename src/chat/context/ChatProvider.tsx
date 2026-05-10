import { useCallback, useMemo, useState, type PropsWithChildren } from "react";

import { ChatContext } from "./ChatContext";
import type { ChatStatus } from "../types/chat.types";

export function ChatProvider({ children }: Readonly<PropsWithChildren>) {
  const [status, setStatus] = useState<ChatStatus>("idle");

  const setIdle = useCallback(() => {
    setStatus("idle");
  }, []);

  const setThinking = useCallback(() => {
    setStatus("thinking");
  }, []);

  const setResponding = useCallback(() => {
    setStatus("responding");
  }, []);

  const value = useMemo(
    () => ({
      status,
      setIdle,
      setThinking,
      setResponding,
    }),
    [status, setIdle, setThinking, setResponding],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
