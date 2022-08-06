<template>
<section>
  <div>
    <div class="cont">
      <div v-for="(myCart,i) in cart" :key="i">
        <div  class="px-2 d-flex justify-content-between c">
          <img v-bind:src="myCart.prodImg" alt="prpd" class="prod-img mb-2" />
          <strong class="name">{{myCart.name}}</strong>
          <strong class="name">{{myCart.price}} $</strong>
          <!-- <strong class="name"> {{quantity}} </strong> -->
          <br />
          
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-end">
      <span>Total: {{ cartTotalPrice }} $</span>
      <!-- <a href="#">Clear Cart</a> -->
    </div>
  </div>

</section>
</template>
<script>
export default {
  data: function () {
    return {
          cart : this.$store.state.myProducts,
          cartTotalPrice : this.$store.state.total,
          quantity : 1
    };
  },
  methods: {
    total(price){
      this.cartTotalPrice = this.cartTotalPrice + price
      console.log(price)
    }
  }
};
</script>

<style scoped>
  .cont{
    margin-top: 10rem;
  }
  .c{
    border-bottom: 1px solid gray ;
  }
  .name{
        margin-top: 5rem;
  }
</style>
