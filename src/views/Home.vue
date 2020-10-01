<template>
  <div class="about">
    <div>
      <div v-if="user">
        <h1>
          Welcome to the game station, {{ user.displayName }},
          <a href="#" role="button" @click="$emit('logout')">Logout</a>
        </h1>
      </div>
      <div v-else>
        <h1>
          Signup today, and join our community <a href="/login">Login</a>/<a
            href="/register"
            >Register</a
          >
        </h1>
      </div>
      <div class="games__block">
        <router-link
          v-for="game in games"
          :key="game.name"
          :to="game.url"
          class="games__block-link"
        >
          <div>{{ game.name }}</div>
          <div><img :src="getCardsUrl(game.pic)" :alt="game.name" /></div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      games: [
        {
          name: "Rock, Paper, Scissors",
          url: "/rockpaperscissors",
          pic: "rockpaperscissors",
        },
        { name: "Card Matching", url: "/cardmatching", pic: "cardmatching" },
      ],
    };
  },
  methods: {
    getCardsUrl(pic) {
      return require(`../assets/${pic}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
.games__block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &-link {
    display: grid;
    grid-template-rows: 1fr 3fr;
    color: black;
    text-decoration: none;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 15px;
    padding: 20px;
    width: 80%;
    height: 60vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: white;
    box-shadow: 1.5em 1em 3em -0.5em;
    img {
      width: 80%;
    }
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
