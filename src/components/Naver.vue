<template>
  <div class="naver">
    <!-- <div class="list" ref="content"> -->
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
    <!-- 滚动条 -->
    <!-- <div class="scroll" ref="scroll"><div class="rail" ref="rail"></div></div> -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    // 滚动条
    // const content = ref(null),
    //   scroll = ref(null),
    //   rail = ref(null);
    // onMounted(() => {
    //   console.log(
    //     content.value.clientHeight,
    //     content.value.scrollHeight,
    //     content.value.clientHeight / content.value.scrollHeight
    //   );
    //   rail.value.style.height =
    //     (content.value.clientHeight / content.value.scrollHeight) * 100 + "%";
    //   content.value.addEventListener("scroll", function (e) {
    //     // 添加滚动事件
    //     console.log("scrollTop", e.target.scrollTop);
    //     rail.value.style.transform =
    //       "translateY(" +
    //       (e.target.scrollTop * 100) / content.value.clientHeight +
    //       "%)";
    //   });
    // });
    // return {
    //   content,
    //   scroll,
    //   rail,
    // };
  },
};
</script>

<style lang="less" scoped>
.naver {
  display: flex;
  // overflow: hiden;
  overflow: auto;
  box-sizing: border-box;
  border-right: 1px solid #f8f8f8;
  width: 200px;
  .list {
    // overflow: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 12px;
    // margin-right: -17px;
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
  //   .scroll {
  //     width: 12px;
  //     background-color: #f5f5f5;
  //     transition: all 0.3s ease-out;
  //     visibility: visible;
  //     .rail {
  //       width: 100%;
  //       background-color: #ccc;
  //       border-radius: 6px;
  //       transition: background-color 0.3s;
  //     }
  //   }
}
</style>
