import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useCommStore} from '../store/comm';
const cart = () =>{
  const type = ref('ee');
  const a = useCommStore();
  function changeType() {
    type.value ='22'
  }
  function getInnerA() {
    return a
  }
  return { type,changeType,getInnerA };
}
export const useCartStore = defineStore('cart', cart);
