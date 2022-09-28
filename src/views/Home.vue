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
          grabCursor
          :slidesPerView="2"
          :slidesPerview="auto"
          centeredSlides
          :spaceBetween="0"
          loop
          navigation
          :pagination="{ clickable: true }"
          parallax
        >
          <swiper-slide>
            <img
              src="../assets/t2.jpg"
              data-swiper-parallax="38%"
              data-swiper-parallax-scale="0.8"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="../assets/t2.jpg"
              data-swiper-parallax="38%"
              data-swiper-parallax-scale="0.8"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="../assets/t2.jpg"
              data-swiper-parallax="38%"
              data-swiper-parallax-scale="0.8"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="../assets/t2.jpg"
              data-swiper-parallax="38%"
              data-swiper-parallax-scale="0.8"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="../assets/t2.jpg"
              data-swiper-parallax="38%"
              data-swiper-parallax-scale="0.8"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="../assets/t2.jpg"
              data-swiper-parallax="38%"
              data-swiper-parallax-scale="0.8"
            />
          </swiper-slide>
        </swiper>
      </div>
      <div class="recommend">
        <div class="title">
          推荐歌单<el-icon size="16px"><ArrowRight /></el-icon>
        </div>
        <div class="playlist-content">
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单1歌单1歌单1歌单1歌单1歌单1歌单1歌单1歌单1歌单1歌单1</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单2</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单3</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单4</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单5</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单6</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单7</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单8</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单9</p>
          </div>
          <div class="playlist-box">
            <img src="../assets/cola-girl.png" />
            <p>歌单10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper组件
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
// 引入swiper样式（按需导入）
import "swiper/swiper.less";
import "swiper/modules/autoplay/autoplay.less"; // 自动播放
import "swiper/modules/pagination/pagination.less"; // 轮播图底面的小圆点
import "swiper/modules/navigation/navigation.less"; // 轮播图两边的左右箭头
import "swiper/modules/parallax/parallax.less"; // 视差效果
// 引入swiper核心和所需模块
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Parallax];

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
      modules: [Autoplay, Pagination, Navigation, Parallax],
    };
  },
};
</script>

<style lang="less" scoped>
.swiper::v-deep {
  --swiper-pagination-color: #ec4141;
  --swiper-navigation-size: 24px;
  --swiper-navigation-color: white;
  .swiper-button-prev {
    top: 45%;
    left: 20px;
  }
  .swiper-button-next {
    top: 45%;
    right: 20px;
  }
  .swiper-pagination {
    position: static;
  }
  .swiper-slide-active {
    z-index: 2;
  }
  .swiper-slide {
    img {
      border-radius: 5px;
      height: 198px;
      width: 540px;
    }
  }
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
    z-index: 2;
    box-sizing: border-box;
    list-style: none;
    .flex();
    flex-direction: row;
    position: sticky;
    top: 0;
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
    .carousel {
      .flex();
      height: 240px;
      width: 100%;
      //   background-color: lightcoral;
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
          //   background-color: pink;
          img {
            border-radius: 5px;
            height: 206px;
            width: 206px;
          }
          p {
            margin: 0;
            color: #373737;
          }
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
  }
}
</style>
