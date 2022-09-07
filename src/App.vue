<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <Header></Header>
  <div class="main">
    <Naver></Naver>
    <Home></Home>
  </div>
  <foot></foot>
</template>

<script>
import Header from "./components/Header.vue";
import Naver from "./components/Naver.vue";
import Home from "./views/Home.vue";
import foot from "./components/foot.vue";

export default {
  name: "App",
  components: {
    Header,
    Naver,
    Home,
    foot,
  },
};
</script>

<style lang="less">
/* #app {
} */
body {
  margin: 0;
  box-sizing: border-box;
  min-width: 1022px;
  min-height: 670px;
}
.main {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  height: 82vh;
}
</style>
