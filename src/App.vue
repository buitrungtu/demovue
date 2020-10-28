<template>
<div>
  <div class="container">
      <LoginForm></LoginForm>
      <Favorite></Favorite>
  </div>
  <div class="container">
    <Slider></Slider>
  </div>
</div>

</template>
<script>

import Login from './components/Login.vue'
import Favorite from './components/Favorite.vue'
import Slide from './components/Slide.vue'

export default {
  components:{
    'LoginForm':Login,
    'Favorite': Favorite,
    'Slider':Slide
  },
  data(){
    return{
     
    }
  },
  methods:{
    greeting(){
      return "hey boy!";
    }
  },
  computed:{

  }
}
</script>

<style>
  .container{
    width: 80%;
    margin: auto;
    display: flex;
    margin-top: 20px;
  }
  input{
    display: block;
    outline: none;
    margin: 10px auto;
    border: 1px solid #ccc;
    height: 25px;
    width: 300px;
}
input:focus{
    border-color:#2735d0;
}
</style>
