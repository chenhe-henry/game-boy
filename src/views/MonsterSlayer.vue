<template>
  <div>
    <div class="status">
      <section class="status__label">
        <h1>Player: {{ playerHealth }}</h1>
      </section>
      <section class="status__label">
        <h1>VS</h1>
      </section>
      <section class="status__label">
        <h1>Monster: {{ monsterHealth }}</h1>
      </section>
    </div>
    <div>
      <button @click="attack">Attack</button>
      <button @click="autoAttack">Auto Attack</button>
      <button @click="restart">Restart</button>
    </div>
    <div v-if="checkWin">
      <h1>Winner is {{ winner }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsOn: false,
      checkWin: false,
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
      this.playerHealth -= this.calculateDamage(3, 10);
      this.monsterHealth -= this.calculateDamage(5, 12);
      if (this.playerHealth <= 0) {
        this.checkWin = true;
        this.winner = "Monster";
      } else if (this.monsterHealth <= 0) {
        this.checkWin = true;
        this.winner = "Player";
      }
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsOn = false;
      this.checkWin = false;
      this.winner = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.status {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  &__label {
    margin: 0 20px;
  }
}
</style>
