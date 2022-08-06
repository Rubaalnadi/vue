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
        <router-link to="/sign-up">Dont have account yet!</router-link>
      </p>
    </form>
      <div v-if="!checked" class="alert alert alert-danger" > your email or password wrong </div>
  </div>
</template>

<script>
import heade from "../components/Header.vue";
import axios from "axios";
export default {
  // props: ['user' ,'to'],
  components:{
    heade
  },
  data: function () {
    return {
      email: "",
      password: "",
      users : this.$store.state.user,
      checked : true
      
    };
  },
  methods: {
    checkLogin() {
      const data = {
        email: this.email,
        password: this.password,
        
      };
      this.users.filter(element => {
        if(element.email === this.email && element.password === this.password){
          console.log('yes');
            this.$router.push("product");
            localStorage.userId = element.id
            this.$store.dispatch('login')
            console.log(this.checked);
        }else{
          this.checked = false
        }
      });
      console.log(this.$store.state.user);
      //to navigate to rout product
      // axios
      //   .post("http://localhost:5000/login", data)
      //   .then((response) => {
      //     console.log(response);
      //     localStorage.token = response.data.token;
      //     localStorage.userId = response.data.user_id;
      //     this.$router.push("product");//to navigate to rout product
      //     this.$store.dispatch('addTouser', response.data.user_id)
      //     console.log( this.$store.state.user)

      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>
<style scoped>
  form{
    margin-top: 20rem ;
  }
</style>