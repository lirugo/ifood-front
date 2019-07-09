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
import AddEatenFood from './components/AddEatenFood.vue'
import Setting from './components/Setting.vue'
const routes = [
  { path: '/ListOfFood', component: ListOfFood },
  { path: '/ListOfEatenFood', component: ListOfEatenFood },
  { path: '/AddEatenFood', component: AddEatenFood },
  { path: '/Setting', component: Setting },
]

const router = new VueRouter({
  mode: 'history',
  routes // сокращённая запись для `routes: routes`
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
