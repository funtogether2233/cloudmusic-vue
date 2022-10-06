<template>
  <el-carousel :interval="5000" type="card" height="198px">
    <el-carousel-item v-for="item in banners" :key="item">
      <!-- <img :src="getImageUrl(item)" /> -->
      <img :src="item.imageUrl" />
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
    let banners;
    http
      .get("http://127.0.0.1:3000/banner")
      .then(function (response) {
        banners = response.data;
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // const getBanner = () => {
    //   $http({
    //     url: "/banner",
    //   }).then((res) => {
    //     let { data } = res.data;
    //     console.log(data);
    //   });
    // };
    // getBanner();
    return {
      //   imgList,
      banners,
      getImageUrl,
    };
  },
};
</script>

<style lang="less" scoped></style>
