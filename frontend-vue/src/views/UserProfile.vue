<template>
  <p> userEmail: {{this.email}}</p>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<br />
<div v-for="cat in category">
  <button @click="getCatById(cat)">{{cat}}</button>
  <br />
  <br />
</div>
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
    };
  },
  methods: {
    getCatById (id){
        this.product.filter(function(elem){
    if(elem.category == id){
        console.log(elem);
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


