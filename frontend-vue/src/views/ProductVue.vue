<template>
 <section>
          <div class="dropdown list">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Category
            </a>
            <!-- v-for="(cat,index) in categories" :key="index" -->
            <ul  class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#" @click="category(1)">1</a></li>
              <li><a class="dropdown-item" href="#" @click="category(2)">2</a></li>
              <li><a class="dropdown-item" href="#" @click="category(3)">3</a></li>
              <li><a class="dropdown-item" href="#" @click="category(4)">4</a></li>
            </ul>
        </div>
   <section class="prod" v-if="!this.getProductByCategory ">
  <div v-for="prod in products" :key="prod.id" >
    <div class="card test-card" >
      <img v-bind:src="prod.prodImg" alt="test" class="prod-img mb-2" @click="details(prod.id)"/>
      <p>{{prod.name}}</p>
      <b-button class="btn" @click="addToCart(prod.id,prod.category,prod.name,prod.prodImg,prod.price)">Add</b-button>
    </div>
  </div>
   </section>
  <section v-else>
   <div class="cat">
    <div class="card test-card" >
      <img v-bind:src="getProductByCategory.prodImg" alt="test" class="prod-img mb-2" @click="details(getProductByCategory.id)"/>
      <p>{{getProductByCategory.name}}</p>
      <b-button class="btn" @click="addToCart(getProductByCategory.id,getProductByCategory.category,getProductByCategory.name,getProductByCategory.prodImg,getProductByCategory.price)">Add</b-button>
    </div>
  </div>
  </section>
 </section>
</template>

<script>
import axios from "axios";
export default {
   props:['id'],
  data: function () {
    return {
      // token: localStorage.getItem("token"),
      products: this.$store.state.products,
      count: this.$store.state.count,
      categories : this.$store.state.category,
      getProductByCategory : null,
      myCart : this.$store.state.myProducts
    };
  },
  methods: {
    addToCart(id,category,name,prodImg,price) {
       this.count++;
          this.$store.dispatch('addProductToCarrt',{
                id: id,
                category : category,
                name:name,
                prodImg : prodImg,
                price : price,
              })
        // this.myCart.map((elem) => {
        //     if(elem.id != id){
        //       this.$store.dispatch('addProductToCarrt',{
        //         id: id,
        //         category : category,
        //         name:name,
        //         prodImg : prodImg,
        //         price : price,
        //         quantity : 1
        //       })
        //     }
        // })
       this.$store.dispatch('add')
       console.log(this.$store.state.count);
       console.log(this.$store.state.category);
       console.log(this.category);
      //  console.log(this.$store.state.myProducts);
      //  console.log(this.$store.state.count);
    },
    details(id){
        // this.idd = id
        this.$router.push({path:`product/${id}`});
        // this.router.push(`product/${id}`)
        console.log(this.id);
    },
    category(cat){
      this.products.filter((elem) => {
          if(elem.category == cat){
            this.getProductByCategory = elem
            console.log(this.getProductByCategory );
          }
      })
    }
  },
  // it use to make response dirictly when open page 
  // beforeMount() {
  //   this.product();
  // },
};
</script>
<style>
  .prod , .cat{
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-top: 10rem;
    flex-wrap: wrap;
  }
  .list{
    margin-top: 0.5rem;
  }
@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
