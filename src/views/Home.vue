<template>
  <div class="about">
    <div>
      <!-- <div v-if="user">
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
      </div> -->
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
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: repeat(2, 1fr);
  }
  &-link {
    // display: grid;
    // grid-template-rows: 1fr 3fr;
    background-size: cover;

    color: black;
    text-decoration: none;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 1.5em 1em 3em -0.5em;

    margin: 20px auto;
    height: 25vh;
    width: 70%;
    padding: 5px;
    @media (min-width: 425px) {
      height: 33vh;
      width: 70%;
    }
    @media (min-width: 768px) {
      height: 40vh;
      width: 80%;
    }
    @media (min-width: 1024px) {
      margin: 20px auto;
      height: 70vh;
      width: 90%;
    }
    @media (min-width: 1440px) {
      margin: 20px auto;
      height: 90vh;
      width: 90%;
    }
    img {
      width: 75%;
      @media (min-width: 425px) {
        width: 90%;
      }
      @media (min-width: 768px) {
        width: 50%;
      }
      @media (min-width: 1024px) {
        width: 85%;
      }
      @media (min-width: 1024px) {
        width: 85%;
      }
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
