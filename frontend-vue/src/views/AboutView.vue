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
        <div v-if="!check" class="alert alert alert-danger" > your email or password wrong </div>
    </div>
</template>
 
<script >
// lang="ts"
import axios from 'axios'
    export default {
        data: function() {
            return {
            userName : "",
            email : "",
            password : "",
            id : 3,
            // role: "61ddd88b5abc886c938dc621",
            checked : false,
            check : true
            }
        },
         methods:{
           mounted ()  {
            if(this.email != '' && this.password != ''){
                this.$store.dispatch('addUser', {
                  id : this.id,
                  email : this.email,
                  password : this.password
                })
                    this.checked = true
                    console.log( this.$store.state.user)  
            }else{
                this.check = false
            }
          //  axios
          //   .post("http://localhost:5000/users", 
          //   data
          // )
          // .then(response => (
          //   console.log(response),
          //   this.checked = true
          //   ))
          // .catch((err) => {
          //   console.log(err)
          // })
          }
  }
    }
</script>

<style>
form{
    margin-top: 20rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
