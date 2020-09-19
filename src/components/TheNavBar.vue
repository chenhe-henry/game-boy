<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/rockpaperscissors">Rock Paper Scissors</router-link>
    <router-link to="/cardmatching">Card Matching</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
