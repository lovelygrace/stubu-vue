// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA0KGmLr8dGG_5yoggGw6aIvcmTkwgcO44',
      authDomain: 'stubu-m.firebaseapp.com',
      databaseURL: 'https://stubu-m.firebaseio.com',
      projectId: 'stubu-m',
      storageBucket: 'stubu-m.appspot.com'
    })
  }
})
