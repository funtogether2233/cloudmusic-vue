<template>
  <div class="footer">
    <audio controls>
      <source src="../assets/morning.mp3" />
      Your browser does not support the <code>audio</code> element.
    </audio>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  box-sizing: border-box;
  display: flex;
  justify-content:center;
  align-items: center;
  height: 90px;
  border-top: 1px solid #f8f8f8;
}
</style>
