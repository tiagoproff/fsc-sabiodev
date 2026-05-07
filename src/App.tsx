import { useEffect } from "react";
import { eventBus } from "./events/eventBus";
import { InputBox } from "./chat/components/InputBox";

export default function App() {
  useEffect(() => {
    const unsubscribe = eventBus.on("BLOCK_START", (payload) => {
      console.log(payload.type);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>EventBus Test</h1>
      <InputBox onSend={handleSend} disabled={false} />
    </div>
  );
}

function handleSend(text: string) {
  eventBus.emit("BLOCK_START", { type: text });
}
