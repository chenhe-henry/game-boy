<template>
  <div id="app" :style="{ backgroundColor: f }">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/rockpaperscissors">RockPaperScissors</router-link
      ><router-link to="/cardcomparsion">CardComparsion</router-link>
    </div>
    <router-view class="views" />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
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
    }, 1000);
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
.views {
}
#nav {
  background: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  a {
    font-weight: bold;
    font-size: 2rem;
    padding: 10px;
    color: white;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
