<template>
  <div id="app" :style="{ backgroundColor: f }">
    <TheNavBar />
    <router-view class="views" />
  </div>
</template>
<script>
// @ is an alias to /src
import TheNavBar from "@/components/TheNavBar.vue";
export default {
  components: { TheNavBar },
  data() {
    return {
      f: "rgba(66,185,131,0.5)",
    };
  },
  created() {
    setInterval(() => {
      this.f = `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},0.5)`;
    }, 5000);
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: all 5s;
  height: 100vh;
}
</style>
