<script setup lang="ts">
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="home">
    <Footer />
  </div>
</template>

<style scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  background: url(../assets/home/bg.png) no-repeat center;
  background-size: 100% 100%;
  min-height: 100vh;
  width: 100vw;
}
</style>
