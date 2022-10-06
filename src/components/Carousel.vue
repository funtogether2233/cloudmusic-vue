<template>
  <el-carousel :interval="5000" type="card" height="198px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img :src="item" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: ["banners"],
};
</script>

<style lang="less" scoped></style>
