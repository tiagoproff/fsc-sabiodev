import { Avatar } from "./avatar/components/Avatar";
import { InputBox } from "./chat/components/InputBox";
import { MessageList } from "./chat/components/MessageList";
import { useChatController } from "./chat/controller/useChatController";

export default function App() {
  const { messages, handleSend, handleStop, handleAssistantComplete } =
    useChatController();

  return (
    <main>
      <Avatar />
      <MessageList messages={messages} onComplete={handleAssistantComplete} />
      <InputBox onSend={handleSend} onStop={handleStop} />
    </main>
  );
}
