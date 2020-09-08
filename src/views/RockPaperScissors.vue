<template>
  <div class="gameRPS">
    <div class="gameRPS__rounds">
      <label for="rounds" class="gameRPS__rounds-label">Rounds:</label>
      <input v-model="desiredRounds" id="rounds" name="rounds" type="number" min="0" />
    </div>
    <button
      :disabled=" desiredRounds<=results.length"
      v-for="selection in selections"
      :key="selection.index"
      class="gameRPS__selection"
      @click="selecteItem(selection.icon)"
    >{{selection.icon}}</button>
    <div class="round">
      <div class="round__result">{{selectedItem}}</div>
      <div class="round__result">{{AISelection}}</div>
    </div>
    <table class="result">
      <thead>
        <tr>
          <th>Rounds</th>
          <th>Player</th>
          <th>AI</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results" :key="result.roundIndex">
          <td>{{result.roundIndex}}</td>
          <td>{{result.selectedItem}}</td>
          <td>{{result.AISelection}}</td>
        </tr>
      </tbody>
    </table>
    <div v-if=" desiredRound<results.length">
      <h1>Game Over</h1>
      <button @click="restart">Restart</button>
    </div>
    <h1 v-else>Enter rounds to start game.</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desiredRounds: null,
      selections: [
        { name: "rock", icon: "✊" },
        { name: "paper", icon: "✋" },
        { name: "scissor", icon: "✌" }
      ],
      selectedItem: "",
      AISelection: "",
      results: []
    };
  },
  methods: {
    selecteItem(element) {
      this.selectedItem = element;
      this.AISelection = this.selections[Math.floor(Math.random() * 3)].icon;
      const resultObj = {
        roundIndex: this.results.length + 1,
        selectedItem: this.selectedItem,
        AISelection: this.AISelection
      };
      this.results.push(resultObj);
      console.log(this.results);
    },
    restart() {
      this.results = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.gameRPS {
  &__rounds {
    font-weight: bold;
    &-label {
      margin-right: 1vw;
    }
  }
  &__selection {
    margin: 0 1vw;
    padding: 20px;
    font-size: 3rem;
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.2);
    }
    &:active,
    &:focus {
      outline-style: none;
    }
  }
}
.round {
  display: flex;
  justify-content: center;
  &__result {
    margin: 0 2vw;
    font-size: 3rem;
  }
}
.result {
  margin: 0 auto;
}
</style>