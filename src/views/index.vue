<template>
  <User ref="userChild" :name="name" />
  <input v-MyDirective />
</template>
<script setup lang="ts">
import { showInfo } from '@/utils/index.js';
import User from '@/components/USer.vue';
const name = ref('lily');
const userChild = ref(null);

const changeName = () => {
  name.value = 'XY';
};
// 自动注册一个指令
const vMyDirective = {
  beforeMount: () => {},
  mounted(el: HTMLElement) {
    console.log(el.focus());
  }
};
defineExpose({
  name
});
</script>