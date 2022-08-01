<template>
  <div>
    <div v-for="myCart in cart">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <img v-bind:src="myCart.prodImg" alt="prpd" class="prod-img mb-2" />
          <strong>{{myCart.name}}</strong>
          <br />
          
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
          >remove</a>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: ${{ cartTotalPrice }}</span>
      <a href="#">Clear Cart</a>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
   cart : this.$store.state.myProducts
    };
  },
  methods: {
  }
};
</script>


