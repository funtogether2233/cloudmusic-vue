<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <Header></Header>
  <Naver></Naver>
</template>

<script>
import Header from "./components/Header.vue";
import Naver from "./components/Naver.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Home,
    Header,
    Naver,
  },
};
</script>

<style>
/* #app {
} */
body {
  margin: 0;
  min-height: 100vh;
}
</style>
