<template>
  <el-carousel :interval="5000" type="card" height="198px">
    <el-carousel-item v-for="item in 6" :key="item">
      <img src="../assets/t2.jpg" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style lang="less" scoped>
.el-carousel__item {
  img {
    //   margin: 0 auto;
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }
}
</style>
