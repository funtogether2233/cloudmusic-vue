<template>
  <!-- 顶部 -->
  <header>
    <Header></Header>
  </header>
  <!-- 主体 -->
  <main>
    <!-- 侧边导航栏 -->
    <nav>
      <Naver></Naver>
    </nav>
    <!-- 内容区 -->
    <div class="content">
      <Home></Home>
    </div>
  </main>
  <!-- 底部播放器 -->
  <footer>
    <Foot></Foot>
  </footer>
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
header {
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
}
main {
  position: absolute;
  top: 60px;
  bottom: 72px;
  display: flex;
  height: auto;
  width: 100%;
  nav {
    height: 100%;
    width: 200px;
  }
  .content {
    flex: 1;
    height: 100%;
  }
}
footer {
  position: absolute;
  bottom: 0;
  height: 72px;
  width: 100%;
}
</style>
