<template>
  <Header></Header>
  <div class="main">
    <Naver></Naver>
    <Home></Home>
  </div>
  <footer><Foot></Foot></footer>
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
  min-height: 100vh;
  //   position: relative;
  //   top: 0;
  //   bottom: 72px;
  //   height: auto;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
