<template>
  <div>
    <div>
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong @click="test">test</strong>
          <p>{{this.product[0].product.join("")}}</p>
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
   product : this.$store.state.cart
    };
  },
  methods: {
    test(){
      console.log(this.product);
    }
  }
};
</script>


