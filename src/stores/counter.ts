import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  function getCount() {
    count.value++;

    return count;
  }

  return { count, getCount };
});
