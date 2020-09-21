<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/rockpaperscissors">Rock Paper Scissors</router-link>
    <router-link to="/cardmatching">Card Matching</router-link>
    <router-link to="/community" :user="user">Community</router-link>
    <router-link to="/login" v-if="!user">Login</router-link>
    <router-link to="/register" v-if="!user">Register</router-link>
    <router-link to="/dashboard" v-if="user">Dashboard</router-link>
    <router-link to="*"
      ><div v-if="user" @click="$emit('logout')" class="logout">
        Logout
      </div></router-link
    >
  </div>
</template>

<script>
export default { props: ["user"] };
</script>

<style lang="scss" scoped>
.navbar {
  background: black;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  a {
    font-weight: bold;
    font-size: 1.8rem;
    padding: 10px;
    color: white;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
