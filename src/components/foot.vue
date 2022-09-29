<template>
  <div class="footer">
    <!-- 左下角歌曲栏 -->
    <div class="song">
      <!-- 歌曲封面 -->
      <img src="../assets/cloudmusic-logo.jpg" alt="cover" />
      <!-- 歌曲信息 -->
      <div class="text">
        <div class="name">
          歌曲名<el-icon size="18px"><Star /></el-icon>
        </div>
        <div class="author">作者</div>
      </div>
    </div>
    <!-- 中间播放器 -->
    <div class="control">
      <AudioPlayer></AudioPlayer>
    </div>
    <!-- 右下角歌曲设置 -->
    <div class="song-setting">
      <!-- 播放列表 -->
      <div class="button">
        <el-icon size="20px"><Files /></el-icon>
      </div>
      <!-- 音质选项 -->
      <div class="quality">音质</div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "./AudioPlayer.vue";
export default {
  name: "Foot",
  components: {
    AudioPlayer,
  },
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.footer {
  box-sizing: border-box;
  border-top: 1px solid #e0e0e0;
  .flex();
  height: 72px;
  color: #373737;
  background-color: white;
  .song {
    .flex();
    flex: 1;
    img {
      margin: 0 12px;
      height: 48px;
      width: 48px;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 48px;
      .name {
        .flex();
        font-size: 16px;
      }
      .author {
        // margin: 8px 0;
        font-size: 10px;
      }
    }
  }
  .control {
    .flex();
    justify-content: center;
  }
  .song-setting {
    .flex();
    flex-direction: row-reverse;
    flex: 1;
    .button {
      .flex();
      margin-right: 20px;
    }
    .quality {
      .flex();
      justify-content: center;
      margin-right: 20px;
      border: 1px solid #ec4141;
      border-radius: 2px;
      height: 18px;
      width: 32px;
      color: #ec4141;
      font-size: 12px;
    }
  }
}
</style>
