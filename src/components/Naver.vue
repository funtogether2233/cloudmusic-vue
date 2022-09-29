<template>
  <div class="naver">
    <div class="list">
      <ul class="button">
        <li>发现音乐</li>
        <li>播客</li>
        <li>视频</li>
        <li>关注</li>
        <li>直播</li>
        <li>私人FM</li>
      </ul>
      <ul>
        <li class="title">我的音乐</li>
        <li>
          <el-icon><Star /></el-icon>我喜欢的音乐
        </li>
        <li>
          <el-icon><Download /></el-icon>本地与下载
        </li>
        <li>
          <el-icon><Clock /></el-icon>最近播放
        </li>
        <li>
          <el-icon><MostlyCloudy /></el-icon>我的音乐云盘
        </li>
        <li>
          <el-icon><Headset /></el-icon>我的播客
        </li>
        <li>
          <el-icon><StarFilled /></el-icon>我的收藏
        </li>
      </ul>
      <ul>
        <li class="title">创建的歌单</li>
        <li>
          <el-icon><Folder /></el-icon>歌单
        </li>
      </ul>
      <ul>
        <li class="title">收藏的歌单</li>
        <li>
          <el-icon><Folder /></el-icon>歌单
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";
export default {
  name: "Naver",
  setup() {
    // 滚动条
    // const content = ref(null);
    // onMounted(() => {
    // });
    // return {
    //   content,
    // };
  },
};
</script>

<style lang="less" scoped>
// 滚动条
::-webkit-scrollbar {
  display: initial;
  width: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: #e0e0e0;
  visibility: hidden;
}
.naver:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}

.naver {
  display: flex;
  overflow: auto;
  box-sizing: border-box;
  border-right: 1px solid #e0e0e0;
  height: 100%;
  width: 100%;
  .list {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 12px 2px 12px 12px;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      color: #373737;
      // .button {
      //   font-size: 20px;
      // }
      li {
        display: flex;
        align-items: center;
        margin-bottom: 2px;
        border-radius: 2px;
        padding: 0 8px;
        height: 36px;
        font-size: 14px;
      }
      .title {
        height: 35px;
        color: #9f9f9f;
      }
      :hover {
        background-color: #f6f6f7;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
