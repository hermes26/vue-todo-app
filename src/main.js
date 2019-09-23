import Vue from 'vue'  //importing vue
import App from './App.vue' //importing the main app component
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  //creating a new vue instance
  //rendering the main app component, inside of..
  render: h => h(App)
}).$mount('#app') //a div or any other element with the id of app(#app)
