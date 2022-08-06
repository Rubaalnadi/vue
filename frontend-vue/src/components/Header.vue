<template>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/product" class="logo"> E-commerce </router-link>
           <ul class="link"> 
                <li> 
                    <router-link to="/login" class="link" @click="test" v-if=" this.tt"> Login </router-link>
                 </li>                
                 <li> 
                    <router-link to="/cart" class="link" v-if="!this.tt"> Cart {{coutCart()}}</router-link>
                 </li>
                <li> 
                    <router-link to="/" class="link"  @click="test1" v-if="!this.tt"> Log-out </router-link>
                 </li>
                  <li> 
                    <router-link to="/user-prof" class="link" v-if="!this.tt"> user  </router-link>
                 </li>
            </ul>
      </div>


     
</nav>
</header>
</template>
<script>
export default {
  data: function () {
    return {
        t : localStorage.getItem('userId'),
        count: this.$store.state.count,
        tt : this.$store.state.isLoggedIn//false
    };
  },
  methods: {
    test(){
         console.log(this.t)
         localStorage.removeItem('userId')
         this.tt = false
    },
        test1(){
         this.tt = true
         localStorage.removeItem('userId')

    },
    coutCart(){
      return this.$store.state.count
    }
  },
 beforeMount() {
    this.coutCart();
  },
};
</script>
<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        
    }
    ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 3rem;
    }
   ul li .link,.logo{
      color: #000;
    }
</style>