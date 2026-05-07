import type { Events, EventsName, Listener } from "./types/event.types";

export const eventBus = (() => {
  const listeners: { [K in EventsName]?: Listener<K>[] } = {};

  return {
    on<K extends EventsName>(event: K, cb: Listener<K>) {
      listeners[event] = listeners[event] ?? [];

      listeners[event].push(cb);

      return () => {
        (listeners[event] as Listener<K>[] | undefined) = listeners[
          event
        ]?.filter((l) => l !== cb);
      };
    },

    emit<K extends EventsName>(event: K, payload: Events[K]) {
      const currentListeners = listeners[event];

      currentListeners?.forEach((cb) => cb(payload));
    },
  };
})();
