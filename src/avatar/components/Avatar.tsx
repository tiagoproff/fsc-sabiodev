import { useEffect, useRef } from "react";

import { useAvatar } from "../context/AvatarContext";

export function Avatar(props: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const avatar = useAvatar();

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    avatar.mount(containerRef.current);

    return () => {
      avatar.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} {...props} />;
}
