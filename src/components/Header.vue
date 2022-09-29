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
          <el-icon size="12px"><ArrowLeft /></el-icon>
        </div>
        <div class="switch">
          <el-icon size="12px"><ArrowRight /></el-icon>
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
          <el-icon size="18px"><Microphone /></el-icon>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-button">
        <el-icon size="18px"><Brush /></el-icon>
        <el-icon size="18px"><Setting /></el-icon>
        <el-icon size="18px"><Message /></el-icon>
        <div class="divider"></div>

        <el-icon size="16px"><Minus /></el-icon>
        <el-icon size="16px"><FullScreen /></el-icon>
        <el-icon size="16px"><Close /></el-icon>
      </div>
      <div class="user">
        <img src="../assets/avatar.jpg" alt="cloudmusic-logo" />
        <p>网易云音乐</p>
        <el-icon size="10px"><CaretBottom /></el-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const searchInfo = ref("");
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}
.icon-center {
  .flex();
  justify-content: center;
  border-radius: 50%;
}
.head {
  box-sizing: border-box;
  .flex();
  height: 100%;
  width: 100%;
  background-color: #ec4141;
  color: white;
  .left {
    .flex();
    flex: 1;
  }
  .right {
    .left();
    flex-direction: row-reverse;
  }
}

.logo {
  .flex();
  margin: 0 75px 0 18px;
  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
  p {
    margin: 0 6px;
    font-size: 18px;
  }
}

.left-button {
  .flex();
  .switch {
    .icon-center();
    margin: 0 4px;
    height: 24px;
    width: 24px;
    background-color: #d93b3b;
    color: #e26a6a;
    :hover {
      color: #f2baba;
    }
  }
  .search {
    :deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0;
      margin: 0 8px;
      border-radius: 16px;
      padding: 0 12px;
      height: 32px;
      width: 160px;
      background-color: #e33e3e;
      color: #f2baba;
      font-size: 14px;
      ::placeholder {
        color: #f2baba;
      }
      .el-input__prefix {
        color: #f2baba;
      }
    }
  }
  .listen {
    .icon-center();
    height: 32px;
    width: 32px;
    background-color: #e33e3e;
    color: #f2baba;
  }
}

.right-button {
  .flex();
  justify-content: space-between;
  margin-right: 24px;
  width: 240px;
  color: #f2baba;
  .divider {
    height: 16px;
    width: 1px;
    background-color: #f2baba;
  }
}

.user {
  .flex();
  margin: 0 8px;
  img {
    border-radius: 50%;
    height: 28px;
    width: 28px;
  }
  p {
    margin: 0 6px;
    font-size: 12px;
  }
}
</style>
