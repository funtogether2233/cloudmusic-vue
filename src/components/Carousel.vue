<template>
  <swiper
    :modules="modules"
    grabCursor
    :slidesPerView="2"
    :slidesPerview="auto"
    centeredSlides
    :spaceBetween="0"
    loop
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
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
  name: "Carousel",
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
</style>
