<template>
  <div>
    <BaseContainer>
      <div class="btn__block">
        <div
          v-for="card in randomCards"
          :key="card.id"
          class="card"
          @click="selectCard(card.id)"
        >
          <span v-if="card.selected">
            <div>{{ card.name }}</div>
            <img :src="getCardsUrl(card.name)" :alt="card.name" />
          </span>
          <span v-else> </span>
        </div>
      </div>
    </BaseContainer>
    <BaseIndicator>
      <h1 slot="first">Attempted</h1>
      <h1 slot="second">{{ attempted }}</h1>
      <!-- <h1 slot="third">coming</h1>
      <h1 slot="fourth">soon</h1> -->
    </BaseIndicator>
    <!--  <BaseInstruction
      ><ol>
        <li v-for="instruction in gameInstruction" :key="instruction.ruleNo">
          {{ instruction.content }}
        </li>
      </ol></BaseInstruction
    > -->
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
      attempted: 0,
    };
  },
  methods: {
    getCardsUrl(pic) {
      return require(`../assets/cardMatching/${pic}.png`);
    },
    async selectCard(id) {
      if (!this.cardInfo[id - 1].selected) {
        let cardPool = this.matchedCards;
        cardPool.push(this.cardInfo[id - 1]);
        await this.selected++;
        this.randomCards.forEach((e) => {
          cardPool.forEach((el) => {
            if (e.id == el.id) {
              e.selected = true;
            }
          });
        });
        if (
          this.selected === 2 &&
          cardPool[0].name === cardPool[1].name &&
          cardPool[0].id !== cardPool[1].id
        ) {
          this.resetRandom();
        }
        if (
          this.selected === 2 &&
          cardPool[0].name !== cardPool[1].name &&
          cardPool[0].id !== cardPool[1].id
        ) {
          this.attempted++;
          setTimeout(() => {
            this.randomCards.forEach((e) => {
              cardPool.forEach((el) => {
                if (e.id == el.id) {
                  e.selected = false;
                }
              });
            });
            this.resetRandom();
          }, 500);
        }
      }
    },
    resetRandom() {
      this.selected = 0;
      this.matchedCards = [];
    },
    resetGame() {
      this.resetRandom();
      this.randomCards = this.shuffle([...this.cardInfo]);
      this.attempted = 0;
    },
    shuffle(array) {
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
    },
  },
  computed: {
    ...mapState(["cardInfo", "gameInstruction"]),
    ...mapGetters([""]),
    canRest() {
      return this.randomCards.every((e) => e.selected === true);
    },
  },
  watch: {
    selected() {
      if (this.selected % 2 === 0 && this.canRest) {
        setTimeout(() => {
          this.cardInfo.forEach((e) => (e.selected = false));
          this.resetGame();
        }, 1000);
      }
    },
  },
  mounted() {
    this.resetGame();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.btn__block {
  @extend %center-grid;
  grid-template-columns: repeat(4, 1fr);
}
.card {
  @extend %border;
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
