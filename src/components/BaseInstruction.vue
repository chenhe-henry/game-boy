<template>
  <div class="baseIndicator">
    <div class="content"><slot></slot></div>
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
  top: 8.5vh;
  left: 2vw;
  width: 20vw;
  height: 60vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
.content {
  text-align: justify;
}
</style>
