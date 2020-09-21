<template>
  <div>
    <!-- Register form -->
    <form @submit.prevent="register">
      <div>
        <div>
          <h1>Register</h1>
          <div>
            <h2 v-show="error">{{ error }}</h2>
            <section>
              <label for="displayName" class="requiredField">Name</label>
              <input
                id="displayName"
                type="text"
                placeholder="Display Name"
                name="displayname"
                required
                v-model="displayName"
              />
            </section>
            <section>
              <label for="email" class="requiredField">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                required
                v-model="email"
              />
            </section>
            <div>
              <section>
                <label for="passOne" class="requiredField">Password</label>
                <input
                  id="passOne"
                  type="password"
                  placeholder="Password"
                  required
                  v-model="passOne"
                  minlength="6"
                />
              </section>
              <section>
                <label for="passTwo" class="requiredField"
                  >Repeat Password</label
                >
                <input
                  id="passTwo"
                  type="password"
                  placeholder="Repeat Password"
                  required
                  v-model="passTwo"
                  minlength="6"
                />
              </section>
            </div>
            <div><button type="submit">Register</button></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      error: null,
      displayName: null,
      email: null,
      passOne: null,
      passTwo: null,
    };
  },
  methods: {
    register() {
      const info = {
        email: this.email,
        password: this.passOne,
        displayName: this.displayName,
      };
      if (!this.error) {
        Firebase.auth()
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            (userCredentials) => {
              return userCredentials.user
                .updateProfile({
                  displayName: info.displayName,
                })
                .then(() => {
                  this.$router.replace("community");
                });
            },
            (error) => {
              this.error = error.message;
            }
          );
      }
    },
  },
  watch: {
    // always check if the repeated password is same as the initial password
    passTwo() {
      if (
        this.passOne !== "" &&
        this.passTwo !== "" &&
        this.passTwo !== this.passOne
      ) {
        this.error = "passwords must match";
      } else {
        this.error = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.requiredField::after {
  content: "*: ";
}
</style>
