<template>
<div id="my-vue">
  <Header v-bind:userSelect="userSelect" />
  <Content title="Tất cả" v-bind:userSelect="userSelect" />
  <Login v-if="formLogin" v-bind:formMode="formModeLogin"/>
  <CartDetail v-if="showCartDetail"/>
</div>
</template>
<script>

import header from './components/header.vue'
import content from './components/content.vue'
import login from './components/login.vue'
import cartDetail from './components/cartDetail.vue'
import {busData} from './main.js';

export default {
  components:{
    'Header':header,
    'Content':content,
    'Login':login,
    'CartDetail':cartDetail
  },
  data(){
    return{
      userSelect:0,
      formLogin:false,
      formModeLogin:1,
      showCartDetail: false
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
      this.showCartDetail = false;
    })
    busData.$on('showCartDetail',()=>{
      this.showCartDetail = true;
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

button{
  padding: 8px 32px;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}
body::-webkit-scrollbar{
  width: 5px;
  background-color: #fff;
}
body::-webkit-scrollbar-thumb{
  background-color: #27ae60;
}
.black-model{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    background-color: #000;
}
.dialog {
    position: fixed;
    top: calc(50% - 300px);
    left: calc(50% - 400px);
    width: 800px;
    height: 600px;
    border:6px solid #27ae60;
    border-top:10px solid #27ae60;
    border-radius: 5px;
    background-color: #fff;
}
.dialog .dialog-name {
    height: 30px;
    background-color: #27ae60;
    color: #fff;
    display: flex;
}
.title-text .icon{
    width: 16px;
    height: 16px;
    margin: 0px 2px;
}
.title-button-close {
    position: absolute;
    right: 0;
    border: 1px solid #ccc;
    width: 20px;
    height: 20px;
    background-image: url('./assets/close.png');
    background-repeat: no-repeat;
    border-radius: 50%;
    background-position: center;
    cursor: pointer;
    background-size: cover;
    background-color: #fff;
}

.dialog-body{
    padding: 5px 30px;
}
.dialog-title{
    text-align: center;
    color: #27ae60;
}
</style>
