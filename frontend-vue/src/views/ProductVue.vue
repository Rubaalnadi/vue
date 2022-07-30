<template>
  <p>Chart {{ count }}</p>
  <div class="container d-flex align-items-stretch flex-wrap">
    <div class="card test-card" v-for="prod in products">
      <img v-bind:src="prod.img" class="prod-img mb-2" alt="img-prod" />
      <p>{{ prod.name }}</p>
      <img v-bind:src="shopkImg" class="shopk" />
      <p class="price">{{ prod.price }} $</p>
      <p>{{ prod.smalldescription }}</p>
      <b-button class="btn" @click="addToCart">Add</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import shopk from "../assets/sho.png";
export default {
  data: function () {
    return {
      token: localStorage.getItem("token"),
      products: [],
      shopkImg: shopk,
      count: 0
    };
  },
  methods: {
    // props: ['user','to'],
    product() {
      axios
        .get("http://localhost:5000/product", {
          headers: {
            authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response);
          this.products = response.data.product;
          console.log(this.$store.state.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart() {
       this.count++;
       this.$store.dispatch('addProductToCarrt',{
         product:this.product,
         quantity : 1
       })
    },
  },
  beforeMount() {
    this.product();
  },
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
