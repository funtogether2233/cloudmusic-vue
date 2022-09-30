<template>
  <!-- 顶部 -->
  <div class="header">
    <Header></Header>
  </div>
  <!-- 主体 -->
  <div class="main">
    <!-- 侧边导航栏 -->
    <div class="nav">
      <Naver></Naver>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <Home></Home>
    </div>
  </div>
  <!-- 底部播放器 -->
  <div class="footer">
    <Foot></Foot>
  </div>
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
::-webkit-scrollbar {
  display: none;
}
body {
  box-sizing: border-box;
  min-width: 1022px;
  min-height: 670px;
}
.header {
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
}
.main {
  position: absolute;
  top: 60px;
  bottom: 72px;
  display: flex;
  height: auto;
  width: 100%;
  .nav {
    height: 100%;
    width: 200px;
  }
  .content {
    flex: 1;
    height: 100%;
  }
}
.footer {
  position: absolute;
  bottom: 0;
  height: 72px;
  width: 100%;
}
</style>
