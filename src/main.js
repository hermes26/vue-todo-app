import Vue from 'vue'  //importing vue
import App from './App.vue' //importing the main app component

Vue.config.productionTip = false

new Vue({ //creating a new vue instance
  render: h => h(App), //rendering the main app component, inside of..
}).$mount('#app') //a div or any other element with the id of app(#app)
