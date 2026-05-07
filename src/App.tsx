import { useEffect } from "react";
import { eventBus } from "./events/eventBus";

export default function App() {
  useEffect(() => {
    const unsubscribe = eventBus.on("AI_END", (payload) => {
      console.log(payload.tone);
    });

    eventBus.emit("AI_END", {
      tone: "neutral",
    });

    return unsubscribe;
  }, []);

  return <div>EventBus Test</div>;
}
