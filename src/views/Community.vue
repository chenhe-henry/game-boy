<template>
  <div>
    <!-- Feedbacks/Write a feedback tabs with user login condition -->
    <div>
      <div v-if="user">
        <button
          class="tab"
          :class="{ activeTab: selectedTab === tab }"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab = tab"
        >
          {{ tab }}
        </button>
      </div>
      <div v-if="!user"><button class="tab activeTab">Feedbacks</button></div>
    </div>
    <!-- Feebacks tab -->
    <div v-show="selectedTab === `Feedbacks`" class="feedbacks">
      <div
        v-for="(feedback, index) in feedbacks"
        :key="index"
        class="feedbacks__feedback"
      >
        <div>From: {{ feedback.feedback.name }}</div>
        <div>Feedback: {{ feedback.feedback.feedback }}</div>
        <div>Date: {{ feedback.createdAt }}</div>
      </div>
    </div>
    <!-- Write a new feedback tab -->
    <div v-show="selectedTab === `Write a feedback`">
      <form @submit.prevent="onSubmit">
        <div>
          <label for="feedback">Feedback</label>
          <textarea id="feedback" v-model="feedback" />
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
export default {
  props: ["user", "feedbacks"], // get 'user','feedbacks' as props from firebase database
  data() {
    return {
      name: "",
      feedback: null,
      tabs: ["Feedbacks", "Write a feedback"],
      selectedTab: "Feedbacks",
      errors: [],
    };
  },

  methods: {
    onSubmit() {
      this.errors = [];
      if (this.user) {
        this.name = this.user.displayName;
        if (this.name && this.feedback) {
          let newFeedBack = {
            name: this.name,
            feedback: this.feedback,
          };
          this.$emit("addFeedback", newFeedBack);
          this.selectedTab = "Write a feedback";
          this.name = null;
          this.feedback = null;
        } else {
          if (!this.name) this.errors.push(`need name`);
          if (!this.feedback) this.errors.push(`need feedback`);
        }
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
