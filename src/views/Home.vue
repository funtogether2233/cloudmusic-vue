<template>
  <div class="home">
    <!-- 导航栏 -->
    <ul class="nav">
      <li>个性推荐</li>
      <li>专属订制</li>
      <li>歌单</li>
      <li>排行榜</li>
      <li>歌手</li>
      <li>最新音乐</li>
    </ul>
    <div class="content">
      <!-- 首页轮播图 -->
      <div class="banner">
        <Carousel></Carousel>
      </div>
      <!-- 推荐歌单 -->
      <div class="recommend">
        <RecommendList></RecommendList>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import RecommendList from "../components/RecommendList.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    RecommendList,
  },
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: initial;
  width: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: #e0e0e0;
}
.flex {
  display: flex;
  align-items: center;
}
.home {
  box-sizing: border-box;
  overflow: auto;
  height: 100%;
  width: 100%;
  .nav {
    .flex();
    box-sizing: border-box;
    list-style: none;
    flex-direction: row;
    position: sticky;
    top: 0;
    z-index: 3;
    margin: 0;
    padding-left: 30px;
    height: 60px;
    width: 100%;
    color: #373737;
    background-color: white;
    li {
      margin-right: 20px;
    }
    :hover {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .content {
    margin: 0 auto;
    width: 1100px;
    .banner {
      height: 240px;
      width: 100%;
    }
    .recommend {
      margin: 15px 0px;
    }
  }
}
</style>
