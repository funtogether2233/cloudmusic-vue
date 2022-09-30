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
.header {
  position: absolute;
  top: 0;
  height: @header-height;
  width: 100%;
}
.main {
  position: absolute;
  top: @header-height;
  bottom: @footer-height;
  display: flex;
  width: 100%;
  .side {
    flex: none;
    width: @side-width;
  }
  .content {
    flex: 1;
  }
}
.footer {
  position: absolute;
  bottom: 0;
  height: @footer-height;
  width: 100%;
}
</style>
