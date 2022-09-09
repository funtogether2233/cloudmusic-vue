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
    <div class="carousel"></div>
    <div class="recommend">
      <div class="title">
        推荐歌单<el-icon size="16px"><ArrowRight /></el-icon>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.home {
  box-sizing: border-box;
  overflow: auto;
  flex: 1;
  border-left: 1px solid #e0e0e0;
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
  .carousel {
    height: 240px;
    width: 100%;
    background-color: cyan;
  }
  .recommend {
    margin: 15px 30px;
    .title {
      .flex();
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
