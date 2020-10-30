<template>
<div id="my-vue">
  <Header v-bind:userSelect="userSelect"  v-on:changeTab="handleChangeTab($event)"/>
  <Content title="Tất cả" v-if="userSelect === 0" />
  <Content title="Điện thoại" v-else-if="userSelect === 1" />
  <Content title="Máy tính" v-else-if="userSelect === 2" />
  <Login />
</div>
</template>
<script>
import header from './components/header.vue'
import content from './components/content.vue'
import login from './components/login.vue'

export default {
  components:{
    'Header':header,
    'Content':content,
    'Login':login
  },
  data(){
    return{
      userSelect:0
    }
  },
  methods:{
    handleChangeTab(tabNumber){
      this.userSelect = tabNumber;
    }
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
