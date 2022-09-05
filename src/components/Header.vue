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
      <div class="function-button">
        <div class="switch"></div>
        <div class="switch"></div>
        <div class="search"></div>
        <div class="listen"></div>
      </div>
    </div>
    <div class="right">
      <div class="right-button">
        <div class="switch"></div>
        <div class="switch"></div>
        <div class="switch"></div>
        <div class="switch"></div>
        <div class="switch"></div>
        <div class="switch"></div>
        <div class="switch"></div>
      </div>
      <div class="user">
        <img src="../assets/avatar.jpg" alt="cloudmusic-logo" />
        <p>网易云音乐</p>
        <div class="switch"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.head {
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

.function-button {
  display: flex;
  align-items: center;
}

.switch {
  margin: 0 5px;
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
}

.search {
  margin: 0 10px;
  height: 40px;
  width: 200px;
  background-color: white;
  border-radius: 20px;
}

.listen {
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
}

.right-button {
  display: flex;
  justify-content: space-between;
  margin-right: 25px;
  width: 300px;
}

.user {
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    height: 35px;
  }
  p {
    margin-left: 6px;
    font-size: 16px;
  }
}
</style>
