<template>
  <div class="vue-tempalte">
    <form @submit.prevent="checkLogin">
      <h3>Log In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control form-control-lg"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block sign">
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // props: ['user' ,'to'],
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    checkLogin() {
      const data = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:5000/login", data)
        .then((response) => {
          console.log(response);
          localStorage.token = response.data.token;
          localStorage.userId = response.data.user_id;
          this.$router.push("product");//to navigate to rout product
          this.$store.dispatch('addTouser', response.data.user_id)
          console.log( this.$store.state.user)

        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
