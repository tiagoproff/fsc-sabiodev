import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ChatProvider } from "./chat/context/ChatProvider.tsx";
import { AvatarProvider } from "./avatar/context/AvatarProvider.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ChatProvider>
        <AvatarProvider>
          <App />
        </AvatarProvider>
      </ChatProvider>
    </StrictMode>,
  );
}
