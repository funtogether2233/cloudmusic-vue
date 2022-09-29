<template>
  <div class="recommend-list">
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
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.recommend-list {
  width: 100%;
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
</style>
