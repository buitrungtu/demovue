<template>
<div>
  <div class="container">
      <LoginForm></LoginForm>
      <Favorite></Favorite>      
  </div>
  <div class="container">
    <Soccer></Soccer>
  </div>
</div>

</template>
<script>

import Login from './components/Login.vue'
import Favorite from './components/Favorite.vue'
import Soccer from './components/Soccer.vue'

export default {
  components:{
    'LoginForm':Login,
    'Favorite': Favorite,
    'Soccer':Soccer
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
    height: 24px;
    width: 300px;
}
input:focus{
    border-color:#2735d0;
}
</style>
