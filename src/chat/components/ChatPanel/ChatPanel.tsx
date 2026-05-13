import { MessageList } from "../MessageList";
import { InputBox } from "../InputBox";
import { useChatController } from "../../controller/useChatController";

import styles from "./ChatPanel.module.scss";

export function ChatPanel() {
  const { messages, handleSend, handleStop, handleAssistantComplete } =
    useChatController();

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>SabioDEV</h1>
      </header>
      <div className={styles.messages}>
        <MessageList messages={messages} onComplete={handleAssistantComplete} />
      </div>
      <footer className={styles.footer}>
        <InputBox
          onSend={handleSend}
          onStop={handleStop}
          className={styles.inputbox}
        />
      </footer>
    </section>
  );
}
