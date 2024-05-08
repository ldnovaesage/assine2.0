import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    selectedValue: "link",
  }),
  actions: {
    setSelectedValue(value) {
      this.selectedValue = value;
      console.log("valor selecionado", this.selectedValue);
    },
  },
});
