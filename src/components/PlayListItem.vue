<template>
  <div class="play-list-item">
    <img :src="playListItem.picUrl" />
    <div class="play-count">
      <el-icon><VideoPlay /></el-icon>
      <p>{{ playListItem.playCount }}</p>
    </div>
    <p class="name">{{ playListItem.name }}</p>
  </div>

  <!-- <div class="recommend-list">
    <div class="playlist-content">
      <div class="playlist-container" v-for="item in 10" :key="item">
        <div class="playlist-cover">
          <img src="../assets/img/cola-girl.png" />
        </div>
        <p>歌单{{ item }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "PlayListItem",
  props: ["playListItem"],
  setup() {
    // console.log(playListItem);
  },
};
</script>

<style lang="less" scoped>
.play-list-item {
  position: relative;
  margin-top: 10px;
  height: 260px;
  width: 205px;
  img {
    height: 205px;
    width: 100%;
    cursor: pointer;
  }
  .play-count {
    position: absolute;
    top: 4px;
    right: 4px;
    .flex();
    font-size: 12px;
    color: white;
  }
  .name {
    font-size: 16px;
    line-height: 1.5;
    cursor: pointer;
  }
}

.recommend-list {
  width: 100%;
  .playlist-content {
    .flex();
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 12px;
    .playlist-container {
      margin-bottom: 24px;
      height: 250px;
      width: 206px;
      .playlist-cover {
        height: 206px;
        width: 206px;
      }
      p {
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
