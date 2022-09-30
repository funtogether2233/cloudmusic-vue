<template>
  <!-- 顶部 -->
  <div class="header">
    <Header></Header>
  </div>
  <!-- 主体 -->
  <div class="main">
    <!-- 侧边导航栏 -->
    <div class="side">
      <SideBar></SideBar>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <Recommend></Recommend>
    </div>
  </div>
  <!-- 底部播放器 -->
  <div class="footer">
    <Foot></Foot>
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
import SideBar from "../layouts/SideBar.vue";
import Foot from "../layouts/Foot.vue";
import Recommend from "./Recommend.vue";

export default {
  name: "Home",
  components: {
    Header,
    SideBar,
    Foot,
    Recommend,
  },
};
</script>

<style lang="less" scoped>
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
  .side {
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
