<template>
  <div class="about">
    <h1>This is an game station</h1>
    <div class="games__block">
      <router-link
        v-for="game in games"
        :key="game.name"
        :to="game.url"
        class="games__block-link"
      >{{game.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      games: [
        { name: "Rock, Paper, Scissors", url: "/games/rockpaperscissors" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.games__block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  &-link {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
