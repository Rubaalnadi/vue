<template>
<section> 
  <p> userEmail: {{this.email}}</p>

<br />
<div v-for="(cat,index) in category" :key="index">
  <button @click="getCatById(cat)">{{cat}}</button>
  <br />
  <br />
</div>
<p v-if="prodName"> {{prodName}} </p>
</section>
</template>
<script>
export default {
  data: function () {
    return {
        category : this.$store.state.category,
        product : this.$store.state.products,
        user : this.$store.state.user,
        email : "",
        id : localStorage.getItem("userId"),
        prodName : null
    };
  },
  methods: {
    getCatById (id){
        this.product.filter(elem => {
           if(elem.category == id){
               this.prodName = elem.name
    }
});
    },
    getUser(){
      this.user.filter((elem) => {
          if(elem.id ==  this.id){
              this.email = elem.email
              console.log(this.email);
          }
      })
    }
  },
    beforeMount() {
    this.getUser();
  },
};
</script>


