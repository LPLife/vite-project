<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import useCurrentInstance from '@/hooks/useCurrentInstance';
const { $axios, $router, $route } = useCurrentInstance();
console.log('🚀 ~ file: home.vue ~ line 5 ~ $router, $route', $router, $route);
var a = 9;
// $axios({
//   method: 'get',
//   url: '/api/'
// }).then((res: any) => {
//   console.log(res);
// });
$axios({
  method: 'get',
  url: 'http://127.0.0.1:8888/api/roles?v=Math.rand()'
}).then((res: any) => {
  console.log(res);
});
// $axios({
//   method: 'get',
//   url: '/api/de'
// }).then((res: any) => {
//   console.log(res);
// });
// $axios({
//   method: 'get',
//   url: '/fe/api/exercise/list',
//   params: {
//     vid: 9,
//     tagId: 16,
//     pageNum: 2,
//     pageSize: 10,
//     orderBy: 'updateTime',
//     order: 'desc'
//   }
// }).then((res: any) => {
//   console.log(res);
// });
</script>

<template>
  <div class="home">
    <Footer />
  </div>
</template>

<style scoped>
.home {
  color: aliceblue;
  position: absolute;
  top: 0;
  left: 0;
  /* background: url(../assets/home/bg.png) no-repeat center; */
  background-size: 100% 100%;
  min-height: 100vh;
}
</style>

