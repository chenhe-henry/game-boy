<template>
  <div>
    <div class="container">
      <div class="btn__block">
        <div
          v-for="card in randomCards"
          :key="card.id"
          class="card"
          @click="selectCard(card.id)"
        >
          <div>{{ card.name }}</div>
          <img :src="getCardsUrl(card.name)" :alt="card.name" />
        </div>
      </div>
    </div>
    <BaseIndicator>Nma</BaseIndicator>
    <BaseInstruction
      ><ol>
        <li v-for="instruction in gameInstruction" :key="instruction.ruleNo">
          {{ instruction.content }}
        </li>
      </ol></BaseInstruction
    >
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      matchedCards: [],
      randomCards: [],
      selected: 0,
    };
  },
  methods: {
    getCardsUrl(pic) {
      return require(`../assets/cards/${pic}.png`);
    },
    selectCard(id) {
      this.matchedCards.push(this.cardInfo[id]);
      this.selected++;
      console.log(this.selected);
      if (
        this.selected === 2 &&
        this.matchedCards[0].name === this.matchedCards[1].name
      ) {
        alert(`match`);
        this.selected = 0;
        this.matchedCards = [];
      }
      if (
        this.selected === 2 &&
        this.matchedCards[0].name !== this.matchedCards[1].name
      ) {
        alert(`not match`);
        this.selected = 0;
        this.matchedCards = [];
      }
    },
  },
  computed: {
    ...mapState(["cardInfo", "gameInstruction"]),
    ...mapGetters([""]),
  },
  mounted() {
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    this.randomCards = shuffle([...this.cardInfo]);
  },
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
  cursor: pointer;
  img {
    height: 90%;
    width: 90%;
    margin: 0 auto;
  }
}
</style>
