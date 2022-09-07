<template>
  <div class="naver" ref="naver">
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
import { onMounted, ref } from "vue";
export default {
  setup() {
    // const naver = ref(null);
    // onMounted(() => {
    //   console.log(naver.value.clientHeight);
    //   let naverClientHeight = naver.value.clientHeight,
    //     naverScrollHeight = naver.value.scrollHeight;
    //   let present = naverClientHeight / naverScrollHeight;
    //   //   let scrollWarp = document.querySelector(".rail");
    //   //   scrollWarp.style.height = present * 100 + "%";
    // });
    // return {
    //   naver,
    // };
    // let naverScrollHeight, naverClientHeight; // 父高度,滚动高度
    // let warp = document.getElementsByClassName("naver");
    // let warp = document.querySelector(".naver");
    // console.log(warp);
    // console.log(warp[0]);
    // naverClientHeight = warp.clientHeight; // 获取父高度
    // naverScrollHeight = warp[0].scrollHeight; // 获取父可滚动高度
    // let present = fatherClientHeight / fatherScrollHeight; // 计算滚动条应该占多高
    // let scrollWarp = document.querySelector('.rail');
    // scrollWarp.style.height = present*100 + '%'; // 用百分比计算rail的高度
    // warp.addEventListener('scroll',function(e){ // 添加滚动事件
    //   console.log(e.target.scrollTop);
    //   scrollWarp.style.transform = 'translateY(' + e.target.scrollTop * 100/fatherClientHeight + '%)'
    // })
  },
};
</script>

<style lang="less" scoped>
.naver {
  display: flex;
  overflow: auto;
  box-sizing: border-box;
  border-right: 1px solid #f8f8f8;
  width: 200px;
  .list {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 12px;
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
        font-weight: bold;
      }
    }
  }
}
</style>
