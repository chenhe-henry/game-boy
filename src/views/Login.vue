<template>
  <div>
    <!-- Login form -->
    <form @submit.prevent="login">
      <div>
        <h3>Login</h3>
        <section>
          <div v-show="error">{{ error }}</div>
          <label for="email" class="requiredField">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            v-model="email"
          />
        </section>
        <section>
          <label for="password" class="requiredField">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            v-model="password"
          />
        </section>
        <div><button type="submit">Log in</button></div>
      </div>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      const info = {
        email: this.email,
        password: this.password,
      };
      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("dashboard");
          },
          (error) => {
            this.error = error.message;
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.requiredField::after {
  content: "*: ";
}
</style>
