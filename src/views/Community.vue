<template>
  <div>
    <button
      class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab"
    >
      {{ tab }}
    </button>
    <div v-show="selectedTab === `Feedbacks`" class="feedbacks">
      <div
        v-for="(feedback, index) in feedbacks"
        :key="index"
        class="feedbacks__feedback"
      >
        <div>From: {{ feedback.name }}</div>
        <div>Feedback: {{ feedback.feedback }}</div>
        <div>Date: {{ feedback.date }}</div>
      </div>
    </div>
    <div v-show="selectedTab === `Write a feedback`">
      <form @submit.prevent="onSubmit">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div>
          <label for="feedback">Feedback</label>
          <textarea id="feedback" v-model="feedback" />
        </div>
        <div>
          <label for="date">Date</label>
          <input type="date" id="date" v-model="date" />
        </div>
        <div><input type="submit" value="Submit" /></div>
      </form>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: null,
      feedback: null,
      date: null,
      tabs: ["Feedbacks", "Write a feedback"],
      selectedTab: "Feedbacks",
      errors: [],
    };
  },
  computed: {
    ...mapState(["feedbacks"]),
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (this.name && this.feedback && this.date) {
        let newFeedBack = {
          name: this.name,
          feedback: this.feedback,
          date: this.date,
        };
        this.feedbacks.push(newFeedBack);
        this.selectedTab = "Feedbacks";
        this.name = null;
        this.feedback = null;
        this.date = null;
      } else {
        if (!this.name) this.errors.push(`need name`);
        if (!this.feedback) this.errors.push(`need feedback`);
        if (!this.date) this.errors.push(`need date`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  margin: 20px;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: bold;
}
.activeTab {
  background-color: aqua;
}
.feedbacks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  &__feedback {
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    font-weight: bold;
  }
}
</style>
