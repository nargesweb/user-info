import Vue from 'vue'
import App from './App.vue'
// Bootstrap 
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// route 
import router from './Routers/route';
// Base Components 
import BaseButtons from './components/BaseComponents/BaseButtons'
import BaseInput from './components/BaseComponents/BaseInput'

Vue.component('BaseButtons',BaseButtons)
Vue.component('BaseInput',BaseInput)





Vue.config.productionTip = false

new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
