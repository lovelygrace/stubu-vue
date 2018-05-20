<template>
  <v-container class="main">
    <v-layout row wrap  class="ma-4">
      <v-flex xs12>
        <v-card color="deep-orange lighten-3">
          <v-card-title>
            <h4>{{ user.firstname}} {{user.lastname}}</h4>
          </v-card-title>
        </v-card>
        <v-card color="grey lighten-4"> 
          <v-card-text>
            <div>
              <p>{{ user.description }}</p>
              <v-text-label v-if="user.specialization !== null">Specialization: </v-text-label><p>{{ user.specialization}}</p>
              <v-text-label v-if="user.contactnumber !== ''">Contact Number: </v-text-label><p>{{user.contactnumber}}</p>
              <v-text-label v-if="user.email !== ''">Email:          </v-text-label><p>{{user.email}}</p>
              <v-text-label v-if="user.degree !== ''">Email:          </v-text-label><p>{{user.degree}}</p>
              <v-text-label v-if="user.about !== ''">Email:          </v-text-label><p>{{user.aboutme}}</p>
            </div>
          </v-card-text>
        </v-card>
        <v-card color="deep-orange lighten-3">
           <v-card-title>
            &copy;2018 — <strong>STUBU</strong>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    user () {
      if (this.tutorIsAuthenticated && this.userIsAuthenticated) {
        return this.myInfoTutor() 
      }
      if (this.tuteeIsAuthenticated && this.userIsAuthenticated) {
        return this.myInfoTutee()
      }
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    tutorIsAuthenticated () {
      return this.$store.getters.tutor !== null && this.$store.getters.tutor !== undefined
    },
    tuteeIsAuthenticated () {
      return this.$store.getters.tutee !== null && this.$store.getters.tutee !== undefined
    }
  },
  methods: {
    myInfoTutee () {
      return this.$store.getters.tutee
    },
    myInfoTutor () {
      return this.$store.getters.tutor
    }
  }
}
</script>