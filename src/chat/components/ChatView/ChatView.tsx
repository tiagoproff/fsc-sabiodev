import { ChatPanel } from "../ChatPanel";
import { ChatProvider } from "../../context/ChatProvider";
import { AvatarProvider } from "../../../avatar/context/AvatarProvider";
import { Avatar } from "../../../avatar/components/Avatar";

import styles from "./ChatView.module.scss";

export function ChatView() {
  return (
    <main className={styles.container}>
      <ChatProvider>
        <AvatarProvider>
          <Avatar />
          <ChatPanel />
        </AvatarProvider>
      </ChatProvider>
    </main>
  );
}
