<template>
  <Home></Home>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="less">
::-webkit-scrollbar {
  display: none;
}
body {
  min-width: 1022px;
  min-height: 670px;
}
</style>
