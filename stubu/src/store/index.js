import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://4.bp.blogspot.com/-wTXFNsSCOO0/V8_5vPaPZNI/AAAAAAAAKbs/yjXbI-KMvO4FK7X4euGiHFtwQKB48xeAwCLcB/s640/DSCF7549.jpg',
        id: '1',
        title: 'session 1',
        location: 'Bos',
        description: 'cutie si Mike',
        date: new Date()
      },
      { imageUrl: 'https://i1.wp.com/mycebu.ph/wp-content/uploads/2015/05/bos-coffee-maribago.jpg?resize=771%2C537&ssl=1',
        id: '2',
        location: 'tom n toms',
        title: 'session 2',
        description: 'gwapo si mike',
        date: new Date()
      }
    ],
    user: {
      id: 'dfsgagagaas',
      registeredMeetups: ['2']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser   (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'sdfaasdfsdf'
      }
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          })
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    }
  }
})
