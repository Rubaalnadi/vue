<template>
    <!-- <div>
      <div class="card test-card" >
      <img v-bind:src="productImg" alt="test" class="prod-img mb-2" />
      <p>{{productName}}</p>
      <p>{{price}} </p>
    </div>
    </div> -->
    <div class="card mb-3" style="max-width: 540px;margin: auto;
    margin-top: 10rem;">
  <div class="row g-0">
    <div class="col-md-4">
      <img v-bind:src="productImg" class="img-fluid rounded-start" alt="productDetails">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{productName}}</h5>
        <p class="card-text"> {{desc}}</p>
        <p class="card-text"><small class="text-muted">Price is : {{price}} $</small></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props:['id'],
    data() {
      return {
        productId : this.$route.params.id,
        product : this.$store.state.products,
        productImg :"",
        productName : "",
        category : "",
        price : "",
        desc : ''
      }
    },
    methods: {
      getDetails(){
        console.log(this.$route.params.id);
        this.product.filter(element => {
        if(element.id == this.productId){
          this.productImg = element.prodImg
          this.productName = element.name
          this.category = element.category
          this.price = element.price
          this.desc = element.description
        }
      });
      }
    },
     beforeMount() {
    this.getDetails();
  },
};
</script>
<style scoped>

</style>