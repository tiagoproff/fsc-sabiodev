import { MessageList } from "../MessageList";
import { InputBox } from "../InputBox";
import { useChatController } from "../../controller/useChatController";

import styles from "./ChatPanel.module.scss";

export function ChatPanel() {
  const { messages, handleSend, handleStop, handleAssistantComplete } =
    useChatController();

  return (
    <section className={styles.container}>
      <MessageList messages={messages} onComplete={handleAssistantComplete} />
      <InputBox onSend={handleSend} onStop={handleStop} />
    </section>
  );
}
