<template>
  <el-carousel :interval="5000" type="card" height="198px">
    <el-carousel-item v-for="banner in banners" :key="banner">
      <img :src="banner" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: ["banners"],
};
</script>
