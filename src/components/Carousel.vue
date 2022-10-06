<template>
  <el-carousel :interval="5000" type="card" height="198px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <!-- <img :src="getImageUrl(item)" /> -->
      <!-- <img :src="img.imageUrl" /> -->
      <p>{{ 1 }}</p>
    </el-carousel-item>
    <!-- <el-carousel-item v-for="img in 6" :key="img">
      <p>{{ img }}</p>
    </el-carousel-item> -->
  </el-carousel>
  <!-- <p v-for="(item, index) in tmp" :key="index">{{ item }}</p> -->
  <p>1{{ banners }}2</p>
  <!-- <p v-for="(item, index) in tmp" :key="index">{{ item }}</p> -->
</template>

<script>
import http from "../plugins/http.js";
export default {
  name: "Carousel",
  setup() {
    const tmp = [
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
      "../assets/img/t2.jpg",
    ];
    const getImageUrl = (url) => {
      return new URL(`${url}`, import.meta.url).href;
    };
    // const imgList = [];
    // const convertBanners = (res) => {
    //   return res.data.banners.map((banner) => {
    //     return banner.imageUrl;
    //   });
    // };
    let banners = [];
    http
      .get("/banner")
      .then(function (response) {
        banners = response.data.banners;
        console.log(response.data);
        // console.log(banners[0].imageUrl);
      })
      // .then(() => {
      //   for (const img of banners) {
      //     console.log(img.imageUrl);
      //   }
      // })
      .catch(function (error) {
        console.log(error);
      });
    return {
      tmp,
      banners,
      getImageUrl,
    };
  },
};
</script>

<style lang="less" scoped></style>
