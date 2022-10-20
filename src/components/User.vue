<script setup lang="ts">
// import { useAttrs,useSlots } from 'vue';
// const props = defineProps({
//   name: String
// });
const emit = defineEmits(['changeName']);
const attrs = useAttrs();
let { name } = attrs;
</script>
<template>
  <div> {{ name }}</div>
  <div> {{ $attrs.name }}</div>
  <div @click="emit('changeName')"> changeName</div>
</template>