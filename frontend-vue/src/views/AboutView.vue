<template>
    <div class="vue-tempalte">
        <form @submit.prevent="mounted">
            <h3>Sign Up</h3>
 
            <div class="form-group">
                <label>Full Name</label>
                <input v-model="userName" type="text" class="form-control form-control-lg"/>
            </div>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
 
            <button  class="btn btn-dark btn-lg btn-block sign">Sign Up</button>
            <div v-if="checked" class="alert alert-success al-ert" > you success creat an account </div>
            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
 
<script>
import axios from 'axios'
    export default {
        data: function() {
            return {
            userName : "",
            email : "",
            password : "",
            role: "61ddd88b5abc886c938dc621",
            checked : false
            }
        },
         methods:{
           mounted ()  {
             const data = {
            userName : this.userName,
            email : this.email,
            password : this.password
          };
           axios
            .post("http://localhost:5000/users", 
            data
          )
          .then(response => (
            console.log(response),
            this.checked = true
            ))
          .catch((err) => {
            console.log(err)
          })
          }
  }
    }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
