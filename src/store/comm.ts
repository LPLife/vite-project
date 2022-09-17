import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCommStore = defineStore('comm', () => {
  const mes = ref('hello');

  return { mes };
});
