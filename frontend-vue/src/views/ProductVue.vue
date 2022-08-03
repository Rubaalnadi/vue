<template>
 <section>
   <p @click="this.$router.push('/cart')">Chart {{ count }}</p>
  <div v-for="prod in products" class="container d-flex align-items-stretch flex-wrap" :key="prod.id">
    <div class="card test-card" @click="test(prod.id)">
      <img v-bind:src="prod.prodImg" alt="test" class="prod-img mb-2" />
      <p>{{prod.name}}</p>
      <b-button class="btn" @click="addToCart(prod.id,prod.category,prod.name,prod.prodImg)">Add</b-button>
    </div>
  </div>
 </section>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      // token: localStorage.getItem("token"),
      products: this.$store.state.products,
      count: this.$store.state.count
    };
  },
  methods: {
    // props: ['user','to'],
    // product() {
    //   axios
    //     .get("http://localhost:5000/product", {
    //       headers: {
    //         authorization: "Bearer " + this.token,
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       this.products = response.data.product;
    //       console.log(this.$store.state.user);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },

    addToCart(id,category,name,prodImg) {
       this.count++;
       this.$store.dispatch('addProductToCarrt',{
         id: id,
         category : category,
         name:name,
         prodImg : prodImg
       })
       console.log(this.$store.state.myProducts);
       console.log(this.$store.state.count);
    },
    test(id){
        console.log(id);
    }
  },
  // it use to make response dirictly when open page 
  // beforeMount() {
  //   this.product();
  // },
};
</script>

<style>
@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
