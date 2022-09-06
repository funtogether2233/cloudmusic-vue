<template>
  <div class="head">
    <div class="left">
      <div class="logo">
        <img
          src="../assets/cloudmusic-logo-reverse.png"
          alt="cloudmusic-logo"
        />
        <p>网易云音乐</p>
      </div>
      <div class="left-button">
        <div class="switch">
          <el-icon size="18px"><ArrowLeft /></el-icon>
        </div>
        <div class="switch">
          <el-icon size="18px"><ArrowRight /></el-icon>
        </div>
        <div>
          <el-input
            v-model="searchInfo"
            class="search"
            placeholder="搜索"
            prefix-icon="Search"
          />
        </div>
        <div class="listen">
          <el-icon size="22px"><Microphone /></el-icon>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-button">
        <el-icon size="22px"><Brush /></el-icon>
        <el-icon size="22px"><Setting /></el-icon>
        <el-icon size="22px"><Message /></el-icon>
        <div>|</div>
        <el-icon size="20px"><FullScreen /></el-icon>
        <el-icon size="18px"><Minus /></el-icon>
        <el-icon size="18px"><Close /></el-icon>
      </div>
      <div class="user">
        <img src="../assets/avatar.jpg" alt="cloudmusic-logo" />
        <p>网易云音乐</p>
        <el-icon size="12px"><CaretBottom /></el-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const searchInfo = ref("");
export default {};
</script>

<style lang="less" scoped>
.head {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 75px;
  color: white;
  background-color: #ec4141;
  .left {
    display: flex;
    flex: 1;
    align-items: center;
  }
  .right {
    .left();
    flex-direction: row-reverse;
  }
}

.logo {
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 103px;
  width: 155px;
  img {
    border-radius: 50%;
    height: 30px;
  }
  p {
    margin-left: 6px;
    font-size: 22px;
  }
}

.left-button {
  display: flex;
  align-items: center;
  //   flex: 1;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 30px;
  width: 30px;
  color: #e26a6a;
  background-color: #d93b3b;
  border-radius: 50%;
  :hover {
    color: #f2baba;
  }
}

.search {
  :deep(.el-input__wrapper) {
    box-sizing: border-box;
    margin: 0 10px;
    padding: 0 16px;
    height: 40px;
    width: 200px;
    color: #f2baba;
    background-color: #e33e3e;
    border-radius: 20px;
    font-size: 18px;
    box-shadow: 0 0 0 0;
    ::placeholder {
      color: #f2baba;
    }
    .el-input__prefix {
      color: #f2baba;
    }
  }
}

.listen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  color: #f2baba;
  background-color: #e33e3e;
  border-radius: 50%;
}

.right-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 25px;
  width: 300px;
  color: #f2baba;
}

.user {
  display: flex;
  align-items: center;
  margin: 0 10px;
  img {
    border-radius: 50%;
    height: 35px;
  }
  p {
    margin: 0 6px;
    font-size: 16px;
  }
}
</style>
