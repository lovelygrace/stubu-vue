import Vue from 'vue'
import Router from 'vue-router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Home from '@/components/Home'
import About from '@/components/About'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import ScheduleSession from '@/components/Sessions/ScheduleSession'
import Sessions from '@/components/Sessions/Sessions'
import Session from '@/components/Sessions/Session'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/sessions',
      name: 'Sessions',
      component: Sessions
    },
    {
      path: '/session/new',
      name: 'ScheduleSession',
      component: ScheduleSession
    },
    {
      path: '/sessions/:id',
      name: 'Session',
      props: true,
      component: Session
    }
  ],
  mode: 'history'
})
