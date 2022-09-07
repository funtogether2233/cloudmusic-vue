<template>
  <div class="footer">
    <div class="song">
      <img src="../assets/cloudmusic-logo.jpg" alt="cover" />
    </div>
    <div class="control">
      <audio controls>
        <source src="../assets/morning.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .song {
    img {
      height: 48px;
      width: 48px;
    }
  }
  .control {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    border-top: 1px solid #f8f8f8;
  }
}
</style>
