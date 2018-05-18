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
    user: null,
    tutor: null,
    tutee: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser   (state, payload) {
      state.user = payload
    },
    setTutor (state, payload) {
      state.tutor = payload
    },
    setTutee (state, payload) {
      state.tutee = payload
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
    },
    signTutorUp ({commit}, payload) {
      const tutor = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        contactnumber: payload.contactnumber,
        degree: payload.degree,
        email: payload.email,
        password: payload.email,
        subject: payload.subject,
        aboutme: payload.aboutme
      }
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          tutor => {
            const newTutor = {
              id: tutor.uid
            }
            commit('setTutor', newTutor)
          }
        )
        .catch(
          error => {
            console.log(error)
          })
      firebase.database().ref('tutors').push(tutor)
    },
    signTuteeUp ({commit}, payload) {
      const tutor = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        contactnumber: payload.contactnumber,
        email: payload.email,
        password: payload.contactnumber
      }
      firebase.database().ref('tutees').push(tutor)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          tutee => {
            const newTutee = {
              id: tutee.uid,
              registeredMeetups: []
            }
            commit('setTutee', newTutee)
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
    },
    user (state) {
      return state.user
    },
    tutor (state) {
      return state.tutor
    },
    tutee (state) {
      return state.tutee
    }
  }
})
