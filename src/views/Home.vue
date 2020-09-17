<template>
  <div class="about">
    <div>
      <h1>Welcome to the game station!</h1>
      <div class="games__block">
        <router-link
          v-for="game in games"
          :key="game.name"
          :to="game.url"
          class="games__block-link"
          >{{ game.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      games: [
        { name: "Rock, Paper, Scissors", url: "/rockpaperscissors" },
        { name: "Card Matching", url: "/cardmatching" },
      ],
    };
  },
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
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    width: 50%;
    height: 25vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: white;
    box-shadow: 1.5em 1em 3em -0.5em;
    &:hover {
      transform: translateY(-5px);
    }
    &:focus,
    &:active {
      transform: translateY(0);
    }
  }
}
</style>
