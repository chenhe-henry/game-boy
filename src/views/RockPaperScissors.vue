<template>
  <div class="gameRPS">
    <div class="gameRPS__theme">
      <label for="theme" class="gameRPS__theme-label">Theme:</label>
      <select v-model="theme" id="theme" name="theme" class="gameRPS__theme-selection">
        <option value="0">✊✋✌</option>
        <option value="1">🐯🎋🐛</option>
      </select>
    </div>
    <div class="gameRPS__rounds">
      <label for="rounds" class="gameRPS__rounds-label">Rounds:</label>
      <input v-model="desiredRounds" id="rounds" name="rounds" type="number" min="0" />
    </div>
    <button
      :disabled=" desiredRounds<=results.length"
      v-for="selection in selectionBase[theme].selections"
      :key="selection.index"
      class="gameRPS__selection"
      @click="selecteItem(selection)"
    >{{selection.icon}}</button>
    <div class="round">
      <div class="round__result">{{selectedItem.icon}}</div>
      <div class="round__result">{{AISelection.icon}}</div>
    </div>
    <div>You: {{youWin}} | AI: {{AIWin}}</div>
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
          <td>{{result.selectedItem.icon}}</td>
          <td>{{result.AISelection.icon}}</td>
        </tr>
      </tbody>
    </table>

    <div v-if=" desiredRounds >1 && desiredRounds<= results.length">
      <h1>Game Over</h1>
      <h1 v-if="youWin > AIWin">You win</h1>
      <h1 v-else-if="AIWin > youWin">AI win</h1>
      <h1 v-else>Draw</h1>
      <button @click="restart">Restart</button>
    </div>
    <h1 v-else-if="desiredRounds === 0">Enter rounds to start the game.</h1>
    <h1 v-else></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desiredRounds: 0,
      theme: 0,
      selectionBase: [
        {
          selections: [
            { name: "rock", icon: "✊", beats: "scissor" },
            { name: "paper", icon: "✋", beats: "rock" },
            { name: "scissor", icon: "✌", beats: "paper" }
          ]
        },
        {
          selections: [
            { name: "tiger", icon: "🐯", beats: "bug" },
            { name: "stick", icon: "🎋", beats: "tiger" },
            { name: "bug", icon: "🐛", beats: "stick" }
          ]
        }
      ],
      selectedItem: "",
      AISelection: "",
      results: [],
      youWin: 0,
      AIWin: 0
    };
  },
  methods: {
    selecteItem(element) {
      this.selectedItem = element;
      this.AISelection =
        this.theme === 0
          ? this.selectionBase[0].selections[Math.floor(Math.random() * 3)]
          : this.selectionBase[1].selections[Math.floor(Math.random() * 3)];
      if (this.selectedItem.beats === this.AISelection.name) {
        this.youWin++;
      } else if (this.AISelection.beats === this.selectedItem.name) {
        this.AIWin++;
      }
      const resultObj = {
        roundIndex: this.results.length + 1,
        selectedItem: this.selectedItem,
        AISelection: this.AISelection
      };
      this.results.push(resultObj);
    },
    restart() {
      this.results = [];
      this.desiredRounds = 0;
      this.selectedItem = "";
      this.AISelection = "";
      this.youWin = 0;
      this.AIWin = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.gameRPS {
  &__theme {
    font-size: 2rem;
    &-label {
      margin-right: 1vw;
    }
    &-selection {
      font-size: 2rem;
    }
  }
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