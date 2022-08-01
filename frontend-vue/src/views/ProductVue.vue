<template>
  <p @click="this.$router.push('/cart')">Chart {{ count }}</p>
  <div class="container d-flex align-items-stretch flex-wrap">
<!-- v-for="prod in products" -->
    <div class="card test-card">
      <img v-bind:src="breadImg" alt="test" class="prod-img mb-2" />
      <p>bread</p>
      <p>5 $</p>
      <p>loream</p>
      <b-button class="btn" @click="addToCart">Add</b-button>
      <!-- <img v-bind:src="prod.img" class="prod-img mb-2" alt="img-prod" />
      <p>{{ prod.name }}</p>
      <img v-bind:src="shopkImg" class="shopk" />
      <p class="price">{{ prod.price }} $</p>
      <p>{{ prod.smalldescription }}</p>
      <b-button class="btn" @click="addToCart">Add</b-button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import shopk from "../assets/sho.png";
import bread from "../assets/bread.jpg"
export default {
  data: function () {
    return {
      // token: localStorage.getItem("token"),
      products: ['bread'],
      shopkImg: shopk,
      breadImg : bread,
      count: 0
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
    addToCart() {
       this.count++;
       this.$store.dispatch('addProductToCarrt',{
         product:this.products,
         quantity : 1
       })
       console.log(this.$store.state.cart);
    },
  },
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
