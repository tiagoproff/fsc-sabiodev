export type ChatMessage = {
  role: "system" | "user" | "assistant";

  content: string;
};

export type AIProvider = {
  ask(messages: ChatMessage[]): Promise<string>;
};
