<template>
  <div class="naver">
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
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.naver {
  width: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 15px;
  border-right: 1px solid #f8f8f8;
  ul {
    list-style: none;
    margin: 0 15px;
    padding: 0;
    color: #373737;
    // .button {
    //   font-size: 20px;
    // }
    li {
      display: flex;
      align-items: center;
      height: 45px;
      margin: 3px 0;
      padding: 0 10px;
      border-radius: 3px;
      background-color: #f6f6f7;
      font-size: 18px;
    }
    .title {
      margin-top: 0;
      color: #9f9f9f;
      font-size: 16px;
    }
  }
}
</style>
