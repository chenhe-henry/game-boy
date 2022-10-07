<template>
  <BaseContainer>
    <div class="status">
      <section class="status__label">
        <h1>Player: {{ playerHealth }}</h1>
        <h3
          class="status__min status__min-left"
          v-show="attackStart && playerMin !== 0"
        >
          {{ playerMin }}
        </h3>
      </section>
      <section class="status__label">
        <h1>VS</h1>
        <h3
          v-show="attackStart && (playerMin !== 0 || monsterMin !== 0)"
          class="hidden"
        >
          VS
        </h3>
      </section>
      <section class="status__label">
        <h1>Monster: {{ monsterHealth }}</h1>
        <h3
          class="status__min status__min-right"
          v-show="attackStart && monsterMin !== 0"
        >
          {{ monsterMin }}
        </h3>
      </section>
    </div>
    <div class="btn-group">
      <button @click="attack" :disabled="checkWin">Attack</button>
      <!-- <button @click="autoAttack">Auto Attack</button> -->
      <button @click="restart">Restart</button>
    </div>
    <div v-if="checkWin">
      <h1>Winner is {{ winner }}</h1>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      playerMin: 0,
      monsterMin: 0,
      gameIsOn: false,
      checkWin: false,
      attackStart: false,
      winner: "",
    };
  },
  methods: {
    autoAttack() {
      setInterval(() => {
        this.attack();
      }, 1000);
    },
    attack() {
      this.attackStart = true;
      this.playerMin = -this.calculateDamage(3, 10);
      this.monsterMin = -this.calculateDamage(5, 12);
      this.playerHealth += this.playerMin;
      this.monsterHealth += this.monsterMin;
      if (this.playerHealth <= 0) {
        this.checkWin = true;
        this.winner = "Monster";
      } else if (this.monsterHealth <= 0) {
        this.checkWin = true;
        this.winner = "Player";
      }
      setTimeout(() => {
        this.attackStart = false;
      }, 2500);
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.playerMin = 0;
      this.monsterMin = 0;
      this.gameIsOn = false;
      this.checkWin = false;
      this.winner = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.status {
  @extend %center-flex;
  padding: 20px;
  &__label {
    margin: 0 20px;
  }
  &__min {
    color: red;
    &-left {
      animation: dropMinLeft 3s 1 alternate;
    }
    &-right {
      animation: dropMinRight 3s 1 alternate;
    }
  }
}
.hidden {
  visibility: hidden;
}
.btn-group {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%);
}
@keyframes dropMinRight {
  // 0% {
  //   opacity: 0;
  // }
  // 50% {
  //   opacity: 1;
  //   transform: translateY(2rem) translateX(2rem) rotate(45deg);
  // }
  to {
    transform: translateY(4rem) translateX(4rem) rotate(90deg);
  }
}

@keyframes dropMinLeft {
  // 0% {
  //   opacity: 0;
  // }
  // 50% {
  //   opacity: 1;
  //   transform: translateY(2rem) translateX(-2rem) rotate(-45deg);
  // }
  to {
    transform: translateY(4rem) translateX(-4rem) rotate(-90deg);
  }
}
</style>
