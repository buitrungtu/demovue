import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router.js'

//router
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

// bus event
export const busData = new Vue();


// filters
Vue.filter('formatMoney',(num)=>{
    return new Intl.NumberFormat('de-DE',{style:'currency',currency:'VND'}).format(num);
})

new Vue({
  el:"#app",
  router,
  render: h => h(App),
})
