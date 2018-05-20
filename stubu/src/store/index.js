import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { isNull } from 'util';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [],
    loading: false,
    user: null,
    error: null,
    // tutor: {
    //   firstname: null,
    //   lastname: null,
    //   contactnumber: null,
    //   degree: null,
    //   email: null,
    //   password: null,
    //   subject: null,
    //   aboutme: null
    // },
    // tutee: {
    //   firstname: null,
    //   lastname: null,
    //   contactnumber: null,
    //   email: null,
    //   password: null
    // }
    tutee: null,
    tutor: null
  },
  mutations: {
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setTutor (state, payload) {
      console.log(payload.firstname)
      state.tutor = payload
    },
    setTutee (state, payload) {
      console.log(payload.firstname)
      console.log(payload.lastname)
      state.tutee = payload
    },
    deleteSession(state, payload) {
      state.loadedMeetups = state.loadedMeetups.filter(e => e.id !== payload)
      console.log(state.loadedMeetups)
    }
  },
  actions: {
    loadMeetups ({commit}) {
      firebase.database().ref('sessions').once('value')
      .then(snapshot => {
          const meetups = Object
            .entries(snapshot.toJSON())
            .map(([key, value]) => {
              return {
                ...value,
                id: key
              }
            })
          commit('setLoadedMeetups', meetups)
        })
    },
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        subject: payload.subject,
        description: payload.description,
        firstname: payload.firstname,
        lastname: payload.lastname,
        contactnumber: payload.contactnumber,
        email: payload.email
      }
      // let imag
      let key
      firebase.database().ref('sessions').push(meetup)
        .then((data) => {
          key = data.key
          return key
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signTutorUp ({commit}, payload) {
      const tutorz = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        contactnumber: payload.contact,
        degree: payload.degree,
        email: payload.email,
        password: payload.password,
        subject: payload.subject,
        aboutme: payload.about
      }
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          tutor => {
            const newTutor = {
              id: tutor.uid
            }
            commit('setTutor', newTutor)
            const tutorKey = firebase.database().ref('tutors').push(tutorz)
            firebase.database().ref('subject').child(payload.subject).child(tutorKey.key).set(' ')
            const xx = tutorKey.key.toString()
            firebase.database().ref('user').child(xx).set('tutor')
          }
        )
        .catch(
          error => {
            console.log(error)
          })
    },
    signTuteeUp ({commit}, payload) {
      const tuteez = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        contactnumber: payload.contact,
        email: payload.email,
        password: payload.password
      }
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          tutee => {
            const newTutee = {
              id: tutee.uid,
              firstname: payload.firstname,
              lastname: payload.lastname,
              contactnumber: payload.contact,
              email: payload.email,
              password: payload.password
            }
            commit('setTutee', newTutee)
            const tuteeKey = firebase.database().ref('tutees').push(tuteez)
            firebase.database().ref('user').child(xx).set('tutee')
            const xx = tuteeKey.key.toString()
            firebase.database().ref('user').child(xx).set('tutee')
          }
        )
        .catch(
          error => {
            console.log(error)
          })
        admin.auth().getUser(uid)
        .then(function(userRecord) {
          console.log("Successfully fetched user data:", userRecord.toJSON());
        })
        .catch(function(error) {
          console.log("Error fetching user data:", error);
        });
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')

      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(async() => {
          let val = await firebase.database().ref('tutors').orderByChild('email').equalTo(payload.email).once('value')
          // console.log(val.val())
          let type = 'tutor'
          let commitType = 'setTutor'
          if (!val.exists() || val === null) {
            console.log('nisulod ko diri')
            val = await firebase.database().ref('tutees').orderByChild('email').equalTo(payload.email).once('value')
            type = 'tutee'
            commitType = 'setTutee'
          }
          val = val.toJSON()
          // console.log(val[id].firstname.toString())
          const [id] = Object.keys(val)
          const user = {...val[id], id, type }
          // console.log(user.firstname)
          commit('setUser', user)
          commit(commitType, user)
        })
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },

    deleteSession(context, { id }) {
      firebase.database().ref(`sessions/${id}`).remove()
        // .then(() => commit('deleteSession', id))
        // .catch(err => {
        //   console.log('error', err)
        // })
    },

    clearError ({commit}) {
      commit('clearError')
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredMeetups: []})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups
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
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    tutor (state) {
      return state.tutor
    },
    tutee (state) {
      return state.tutee
    }
  }
})