export type Events = {
  USER_SENT: void;
  AI_START: void;
  AI_END: { tone: string };

  BLOCK_START: { type: string };
  BLOCK_END: void;
  ALL_DONE: void;
};

export type EventsName = keyof Events;
export type Listener<K extends EventsName> = (payload: Events[K]) => void;
