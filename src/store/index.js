import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardInfo: [
      {
        name: "bulbasaur",
        id: 1,
        selected: false
      },
      {
        name: "charmander",
        id: 2,
        selected: false
      },
      {
        name: "squirtle",
        id: 3,
        selected: false
      },
      {
        name: "pikachu",
        id: 4,
        selected: false
      },
      {
        name: "psyduck",
        id: 5,
        selected: false
      },
      {
        name: "mew",
        id: 6,
        selected: false
      },
      {
        name: "bulbasaur",
        id: 7,
        selected: false
      },
      {
        name: "charmander",
        id: 8,
        selected: false
      },
      {
        name: "squirtle",
        id: 9,
        selected: false
      },
      {
        name: "pikachu",
        id: 10,
        selected: false
      },
      {
        name: "psyduck",
        id: 11,
        selected: false
      },
      {
        name: "mew",
        id: 12,
        selected: false
      },
    ],
    gameInstruction: [
      {
        ruleNo: 1,
        content: `The first player chooses a card and carefully turns it over. Be sure not to bother the surrounding cards`,
      },
      {
        ruleNo: 2,
        content: `The player then selects another card and turns it over. If the two cards are a matching pair for example two Jacks then they take the two cards and start a stack. The player is awarded another turn for making a match and goes again.`,
      },
      {
        ruleNo: 3,
        content: `If the cards are not a match they are turned back over and it is now the next players turn.`,
      },
      {
        ruleNo: 4,
        content: `The next player chooses their first card and turns it over. If it is a match for one of the cards the previous player turned over then they try to remember where that matching card was and turn it. If they are successful at making a match they place the cards in their stack and choose another card.`,
      },
      {
        ruleNo: 5,
        content: `If the first card turned over was not a match for one previously turned over the player selects another card in an attempt of making a pair.`,
      },
      {
        ruleNo: 6,
        content: `If they are unsuccessful in making a match they flip the cards back over and play is passed to the next player.`,
      },
      {
        ruleNo: 7,
        content: `A players turn is not over until they are unable to make a matching pair.`,
      },
      {
        ruleNo: 8,
        content: `The game continues in this fashion until all the cards are played.`,
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
});
