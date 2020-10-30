<template>
<div id="my-vue">
  <Header v-bind:userSelect="userSelect" />
  <Content title="Tất cả" v-if="userSelect === 0" />
  <Content title="Điện thoại" v-else-if="userSelect === 1" />
  <Content title="Máy tính" v-else-if="userSelect === 2" />
  <Login v-if="formLogin" v-bind:formMode="formModeLogin"/>
</div>
</template>
<script>
import header from './components/header.vue'
import content from './components/content.vue'
import login from './components/Login.vue'
import {busData} from './main.js';
export default {
  components:{
    'Header':header,
    'Content':content,
    'Login':login
  },
  data(){
    return{
      userSelect:0,
      formLogin:false,
      formModeLogin:1
    }
  },
  created(){
    // xử lý việc thay đổi tab
    busData.$on('changeTab',(tabNumber)=>{
      this.userSelect = tabNumber;
    }),
    // hiện form đăng nhập
    busData.$on('loginOnClick',(formMode)=>{
      this.formModeLogin = formMode;
      this.formLogin = true;
    })
    // thoát form đăng nhập
    busData.$on('closeLoginOnClick',()=>{
      this.formLogin = false;
    })
  },
  methods:{
   
  },
  computed:{

  }
}
</script>

<style>
#my-vue{
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  margin: 0px;
  padding: 0px;
}


</style>
