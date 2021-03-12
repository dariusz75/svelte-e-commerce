import { writable } from 'svelte/store';

const store = writable({
  sidebar: false,
  cart: false,
  alert: false,
});

export const globalStore = {
  subscribe: store.subscribe,
  toggleItem: (item, value) => {
    store.update((storeItems) => {
      return { ...storeItems, [item]: value };
    });
  },
};
