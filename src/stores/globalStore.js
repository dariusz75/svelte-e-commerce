import { writable } from "svelte/store";

const store = writable({
  sidebar: false,
  cart: false,
  alert: false,
  alertText: "default alert",
  alertDanger: true,
});

export const globalStore = {
  subscribe: store.subscribe,
  toggleItem: (item, value, alertText = "default", alertDanger = false) => {
    if (item === "alert") {
      store.update((storeValues) => {
        return { ...storeValues, alert: value, alertText, alertDanger };
      });
    } else {
      store.update((storeItems) => {
        return { ...storeItems, [item]: value };
      });
    }
  },
};

export default globalStore;
