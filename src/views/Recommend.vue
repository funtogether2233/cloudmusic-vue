<template>
  <div class="recommend">
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
        <Carousel :banners="banners" />
      </div>
      <!-- 推荐歌单 -->
      <div class="recommend-list">
        <div class="title">
          推荐歌单<el-icon size="16px"><ArrowRight /></el-icon>
        </div>
        <div class="playlist">
          <PlayListItem
            v-for="item in playLists"
            :playListItem="item"
            :key="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import PlayListItem from "../components/PlayListItem.vue";
import { getBanners, getRecommendLists } from "../api/recommend/index.js";
import { onMounted, ref } from "vue";

export default {
  name: "Recommend",
  components: {
    Carousel,
    PlayListItem,
  },
  setup() {
    onMounted(() => {
      init();
    });
    const banners = ref([]);
    const playLists = ref([]);
    const init = async () => {
      try {
        banners.value = await getBanners();
        playLists.value = await getRecommendLists();
      } catch (error) {
        console.error(error);
      }
    };
    return {
      banners,
      playLists,
    };
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
  background: @boarder-color;
}
.recommend {
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
    color: @font-color;
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
    .recommend-list {
      .title {
        .flex();
        font-size: 18px;
        font-weight: bold;
      }
      .playlist {
        .flex();
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 12px;
      }
    }
  }
}
</style>
