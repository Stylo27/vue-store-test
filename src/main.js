import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store.js'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
