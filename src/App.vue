<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <Header></Header>
  <div class="main">
    <Naver></Naver>
    <Home></Home>
  </div>
  <Foot></Foot>
</template>

<script>
import Header from "./components/Header.vue";
import Naver from "./components/Naver.vue";
import Home from "./views/Home.vue";
import Foot from "./components/Foot.vue";

export default {
  name: "App",
  components: {
    Header,
    Naver,
    Home,
    Foot,
  },
};
</script>

<style lang="less">
/* #app {
} */
::-webkit-scrollbar {
  display: none;
}
body {
  margin: 0;
  box-sizing: border-box;
  min-width: 1022px;
  min-height: 670px;
}
.main {
  display: flex;
  height: 82vh;
}
</style>
