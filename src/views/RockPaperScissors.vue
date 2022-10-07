<template>
  <BaseContainer class="gameRPS">
    <div v-if="desiredRounds >= 1 && desiredRounds <= results.length">
      <h1>
        Game Over,
        <span v-if="youWin > AIWin">You win !</span>
        <span v-else-if="AIWin > youWin">AI win !</span>
        <span v-else>Draw !</span>
      </h1>
    </div>
    <h1 v-else-if="desiredRounds === 0">Enter rounds to start the game.</h1>
    <h1 v-else-if="desiredRounds > defaultMaximunRounds">
      The maximum rounds is 5, re-enter the rounds to start.
    </h1>
    <h1 v-else-if="desiredRounds !== 0 && !gameStarted">Ready to go</h1>
    <h1 v-else>Game is on</h1>
    <div class="gameRPS__theme">
      <label for="theme" class="gameRPS__theme-label">Theme:</label>
      <select
        v-model="theme"
        id="theme"
        name="theme"
        class="gameRPS__theme-selection"
        :disabled="isGameStarted"
      >
        <option value="0">✊✋✌</option>
        <option value="1">🐯🎋🐛</option>
      </select>
    </div>
    <div class="gameRPS__rounds">
      <label for="rounds" class="gameRPS__rounds-label">Rounds:</label>
      <input
        v-model="desiredRounds"
        id="rounds"
        name="rounds"
        type="number"
        min="0"
        :max="defaultMaximunRounds"
        :disabled="gameStarted"
      />
    </div>
    <br />
    <div>
      <button
        v-if="
          isGameStarted && desiredRounds > 0 && desiredRounds > results.length
        "
        @click="gameStarted = true"
        :disabled="desiredRounds > 0 ? gameStarted : true"
        class="gameRPS__button"
      >
        Start
      </button>
      <button v-else-if="desiredRounds === 0" disabled class="gameRPS__button">
        &uarr;
      </button>
      <button v-else @click="restart" class="gameRPS__button">
        Restart
      </button>
    </div>

    <button
      :disabled="!gameStarted || results.length >= desiredRounds"
      v-for="selection in selectionBase[theme].selections"
      :key="selection.index"
      class="gameRPS__selection"
      @click="selecteItem(selection)"
    >
      {{ selection.icon }}
    </button>
    <div class="round">
      <div class="round__result">{{ selectedItem.icon }}</div>
      <div class="round__result">{{ AISelection.icon }}</div>
    </div>
    <div class="final__result">You: {{ youWin }} | AI: {{ AIWin }}</div>
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
          <td>{{ result.roundIndex }}</td>
          <td>{{ result.selectedItem.icon }}</td>
          <td>{{ result.AISelection.icon }}</td>
        </tr>
      </tbody>
    </table>
  </BaseContainer>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      desiredRounds: 0,
      defaultMaximunRounds: 5,
      theme: 0,
      selectionBase: [
        {
          selections: [
            { name: "rock", icon: "✊", beats: "scissor" },
            { name: "paper", icon: "✋", beats: "rock" },
            { name: "scissor", icon: "✌", beats: "paper" },
          ],
        },
        {
          selections: [
            { name: "tiger", icon: "🐯", beats: "bug" },
            { name: "stick", icon: "🎋", beats: "tiger" },
            { name: "bug", icon: "🐛", beats: "stick" },
          ],
        },
      ],
      selectedItem: "",
      AISelection: "",
      results: [],
      youWin: 0,
      AIWin: 0,
    };
  },
  computed: {
    isGameStarted() {
      if (
        this.desiredRounds === 0 ||
        this.desiredRounds > this.defaultMaximunRounds
      ) {
        return false;
      } else {
        return true;
      }
    },
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
        AISelection: this.AISelection,
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
      this.gameStarted = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
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
  &__button {
    color: black;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: aqua;
    border-radius: 5px;
    padding: 10px 30px;
    cursor: pointer;
    transition: all 0.2s;
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
.final__result {
  font-size: 2rem;
}
.result {
  margin: 0 auto;
}
</style>
