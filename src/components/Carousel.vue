<template>
  <el-carousel :interval="5000" type="card" height="198px">
    <el-carousel-item v-for="item in banners" :key="item">
      <img :src="getImageUrl(item)" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  setup() {
    const banners = [
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
    ];
    //   "@/assets/img/t2.jpg"
    const getImageUrl = (url) => {
      return new URL(`${url}`, import.meta.url).href;
    };
    // const imgList = [];
    // const convertBanners = (res) => {
    //   return res.data.banners.map((banner) => {
    //     return banner.imageUrl;
    //   });
    // };
    return {
      //   imgList,
      banners,
      getImageUrl,
    };
  },
};
</script>

<style lang="less" scoped></style>
