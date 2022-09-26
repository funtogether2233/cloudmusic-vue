<template>
  <div class="home">
    <ul class="nav">
      <li>个性推荐</li>
      <li>专属订制</li>
      <li>歌单</li>
      <li>排行榜</li>
      <li>歌手</li>
      <li>最新音乐</li>
    </ul>
    <div class="content">
      <div class="carousel">
        <swiper
          :modules="modules"
          :loop="true"
          :slides-per-view="3"
          :space-between="-50"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
        >
          <!-- loop可循环轮播，autoplay可自动播放 -->
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
        </swiper>
      </div>
      <div class="recommend">
        <div class="title">
          推荐歌单<el-icon size="16px"><ArrowRight /></el-icon>
        </div>
        <div class="playlist-content">
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
          <div class="playlist-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper组件
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
// 引入swiper样式（按需导入）
// import "swiper/less";
// import "swiper/less/pagination"; // 轮播图底面的小圆点
// import "swiper/less/navigation"; // 轮播图两边的左右箭头
// import "swiper/less/scrollbar"; // 轮播图的滚动条
import "swiper/swiper.less";
import "swiper/modules/pagination/pagination.less"; // 轮播图底面的小圆点
import "swiper/modules/navigation/navigation.less"; // 轮播图两边的左右箭头
import "swiper/modules/scrollbar/scrollbar.less"; // 轮播图的滚动条
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css"; // 轮播图底面的小圆点
// import "swiper/modules/navigation/navigation.min.css"; // 轮播图两边的左右箭头
// import "swiper/modules/scrollbar/scrollbar.min.css"; // 轮播图的滚动条
// 引入swiper核心和所需模块
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
// const modules = [Ally, Pagination, Navigation, Scrollbar];

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
    };
  },
};
</script>

<style lang="less" scoped>
.swiper-slide {
  height: 240px;
  font-size: 30px;
  text-align: center;
  background-color: pink;
}

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
  flex: 1;
  height: 100%;
  .nav {
    box-sizing: border-box;
    list-style: none;
    .flex();
    flex-direction: row;
    margin: 0;
    padding: 0 0 0 30px;
    height: 60px;
    width: 100%;
    color: #373737;
    font-size: 16px;
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
    .carousel {
      height: 240px;
      width: 100%;
      background-color: lightcoral;
    }
    .recommend {
      margin: 15px 0px;
      .title {
        .flex();
        font-size: 18px;
        font-weight: bold;
      }
      .playlist-content {
        .flex();
        justify-content: space-between;
        flex-wrap: wrap;
        .playlist-box {
          margin-bottom: 24px;
          height: 250px;
          width: 206px;
          background-color: pink;
        }
      }
    }
  }
}
</style>
