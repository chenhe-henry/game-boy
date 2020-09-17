<template>
  <div class="container">
    <div class="btn__block">
      <div v-for="card in cardInfo" :key="card.id" class="card">
        <div>{{ card.name }}</div>
        <img :src="getCardsUrl(card.name)" :alt="card.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardInfo: [
        {
          name: "bulbasaur",
          id: 1,
        },
        {
          name: "charmander",
          id: 2,
        },
        {
          name: "squirtle",
          id: 3,
        },
        {
          name: "pikachu",
          id: 4,
        },
        {
          name: "psyduck",
          id: 5,
        },
        {
          name: "mew",
          id: 6,
        },
        {
          name: "bulbasaur",
          id: 7,
        },
        {
          name: "charmander",
          id: 8,
        },
        {
          name: "squirtle",
          id: 9,
        },
        {
          name: "pikachu",
          id: 10,
        },
        {
          name: "psyduck",
          id: 11,
        },
        {
          name: "mew",
          id: 12,
        },
      ],
    };
  },
  methods: {
    getCardsUrl(pic) {
      return require(`../assets/cards/${pic}.png`);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  width: 50%;
  height: 88vh;
  margin: 10px auto;
  box-shadow: 1.5em 1em 1em -0.5em;
}
.btn__block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-content: center;
}
.card {
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0.5em 0.5em 0.5em -0.5em;
  height: 24vh;
  width: 10vw;
  margin: 20px;
  text-align: center;
  transition: all 2s;
  display: grid;
  grid-template-rows: 1fr 4fr;
  img {
    height: 90%;
    width: 90%;
    margin: 0 auto;
  }
}
</style>
