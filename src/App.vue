<template>
  <div id="app" :style="{ backgroundColor: f }">
    <TheNavBar :user="user" @logout="logout" />
    <router-view
      class="views"
      :user="user"
      :feedbacks="feedbacks"
      @logout="logout"
      @addFeedback="addFeedback"
      @delete-feedback="deleteFeedback"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import Firebase from "firebase";
import TheNavBar from "@/components/TheNavBar.vue";
import db from "./db.js";
export default {
  components: { TheNavBar },
  data() {
    return { user: null, feedbacks: [], f: "rgba(66,185,131,0.5)" };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("/");
        });
    },
    addFeedback(payload) {
      db.collection("feedbacks")
        .doc("allFeedbacks")
        .collection("feedbacks")
        .add({
          details: payload,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
        });
    },
    deleteFeedback(payload) {
      db.collection("feedbacks")
        .doc("allFeedbacks")
        .collection("feedbacks")
        .doc(payload)
        .delete();
      console.log(`detele ${payload}`);
    },
  },
  created() {
    setInterval(() => {
      this.f = `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},0.5)`;
    }, 5000);
  },
  mounted() {
    db.collection("feedbacks")
      .doc("allFeedbacks")
      .collection("feedbacks")
      // .limit(6)
      .onSnapshot((snapshot) => {
        const snapData = [];
        snapshot.forEach((doc) => {
          snapData.push({
            id: doc.id,
            feedback: doc.data().details,
            createdAt: new Date(
              doc.data().createdAt.seconds * 1000
            ).toLocaleString(),
          });
          // get the data sorted with createdAt
          this.feedbacks = snapData.sort((a, b) => {
            if (a.createdAt < b.createdAt) {
              return 1;
            } else {
              return -1;
            }
          });
        });
      });
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: all 5s;
  width: 100%;
  min-height: 100vh;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
</style>
