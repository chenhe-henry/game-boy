<template>
  <div class="container">
    <div class="btn__block">
      <div v-for="card in cardInfo" :key="card.index" class="card">
        {{ card.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardInfo: [
        { name: 1, value: 1 },
        { name: 2, value: 2 },
        { name: 3, value: 3 },
        { name: 4, value: 4 },
        { name: 1, value: 1 },
        { name: 2, value: 2 },
        { name: 3, value: 3 },
        { name: 4, value: 4 },
        { name: 1, value: 1 },
        { name: 2, value: 2 },
        { name: 3, value: 3 },
        { name: 4, value: 4 },
      ],
    };
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
  height: 24vh;
  width: 10vw;
  margin: 20px;
  text-align: center;
}
</style>
