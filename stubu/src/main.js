// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
// import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA0KGmLr8dGG_5yoggGw6aIvcmTkwgcO44',
      authDomain: 'stubu-m.firebaseapp.com',
      databaseURL: 'https://stubu-m.firebaseio.com',
      projectId: 'stubu-m',
      storageBucket: 'stubu-m.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    firebase.database().ref('sessions').on('value', () => {
      this.$store.dispatch('loadMeetups')
    })
    this.$store.dispatch('loadMeetups')
  }
})