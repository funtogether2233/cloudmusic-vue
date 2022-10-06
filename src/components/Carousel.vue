<template>
  <el-carousel :interval="5000" type="card" height="198px">
    <el-carousel-item v-for="img in banners" :key="index">
      <!-- <img :src="getImageUrl(item)" /> -->
      <!-- <img :src="img.imageUrl" /> -->
      <p>{{ img.imageUrl }}</p>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import http from "../plugins/http.js";
export default {
  name: "Carousel",
  setup() {
    // const banners = [
    //   "../assets/img/t2.jpg",
    //   "../assets/img/t2.jpg",
    //   "../assets/img/t2.jpg",
    //   "../assets/img/t2.jpg",
    //   "../assets/img/t2.jpg",
    //   "../assets/img/t2.jpg",
    // ];
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
      .get("http://127.0.0.1:3000/banner")
      .then(function (response) {
        banners = response.data.banners;
        console.log(response.data);
      })
      //   .then(() => {
      //     for (const img of banners) {
      //       console.log(img.imageUrl);
      //     }
      //   })
      .catch(function (error) {
        console.log(error);
      });
    return {
      banners,
      getImageUrl,
    };
  },
};
</script>

<style lang="less" scoped></style>
