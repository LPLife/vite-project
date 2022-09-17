import { defineStore } from 'pinia';
import { ref } from 'vue';
import {useCartStore} from './cart'; // 其他store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('liming');
  const age = ref(0);
  const cartStore = useCartStore(); // 在当前store引用其他store
  function increment() {
    count.value++;
    cartStore.changeType();// 调用其他store的方法
  }
  function decrement() {
    count.value--;
  }
  return { count,age,name, increment, decrement };
});
