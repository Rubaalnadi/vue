<template>
    <!-- <div class="hero">
        <h1>Get Started</h1>
    </div> -->
    <div>
        <img v-bind="mainProps" :src="getImageUrl(1)" alt="Image 1" class="bac"/>
        <div class="test">
        <h1 class="start" @click="Login">Get Started</h1>
        </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 1300,
          height: 800,
        //   class: 'my-5'
        }
      }
    },
    methods: {
      getImageUrl(imageId) {
        const { width, height } = this.mainProps
        return `https://picsum.photos/${width}/${height}/?image=${imageId}`
      },
      Login(){
        this.$router.push({name:'login'})
      }
    }
  }
</script>


<style scoped>
.bac{
    position: relative;
}
.start{
 
    color: #fff;
}
.test{
    border: 1px solid #000;
    border-radius: 5%;
    width: 218px;
    height: 71px;
    align-items: center;
    padding: 7px;
    position: absolute;
    top: 480px;
    left: 30px;
}
.test:hover{
    cursor: pointer;
}
</style>


