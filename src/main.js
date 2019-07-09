import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import ListOfFood from './components/ListOfFood.vue'
import ListOfEatenFood from './components/ListOfEatenFood.vue'
const routes = [
  { path: '/ListOfFood', component: ListOfFood },
  { path: '/ListOfEatenFood', component: ListOfEatenFood },
]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
