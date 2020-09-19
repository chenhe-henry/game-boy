<template>
  <div class="baseIndicator">
    <div><slot></slot></div>
    <div><slot></slot></div>
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.baseIndicator {
  position: absolute;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  top: 20vh;
  right: 2vw;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
</style>
