<template>
  <div class="baseIndicator">
    <div><slot name="first"></slot></div>
    <div><slot name="second"></slot></div>
    <div><slot name="third"></slot></div>
    <div><slot name="fourth"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.baseIndicator {
  position: absolute;
  @extend %border;
  background-color: white;
  top: 20vh;
  right: 2vw;
  width: 20vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
</style>
