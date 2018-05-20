<template>
  <v-container class="main">
    <v-layout row wrap  class="ma-4">
      <v-flex xs12>
        <v-card color="deep-orange lighten-3">
          <v-card-title>
            <h4 class="head">{{ user.firstname}} {{user.lastname}}</h4>
          </v-card-title>
        </v-card>
        <v-card color="grey lighten-4"> 
          <v-card-text>
            <div>
              <p>{{ user.description }}</p>
              <h4 class="p">Contact Number: {{user.contactnumber}}</h4>
              <h4 class="p">Email: {{user.email}}</h4>
              <h4 class="p" v-if="isTutor">About Me: {{user.aboutme}}</h4>
              <h4 class="p" v-if="isTutor">Degree: {{user.degree}}</h4>
              <h4 class="p" v-if="isTutor">Specialization: {{user.subject}}</h4>
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
    isTutor () {
      if (this.tutorIsAuthenticated && this.userIsAuthenticated) {
        return true 
      }else {
        return false
      }
    },
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

<style>
  .firstcard {
      margin-bottom: 15px;
      background-color: #FFAB91;
      padding-bottom: 20px;
  }
  .head {
    padding-top: 20px;
    padding-left: 2px;
    padding-right: 2px;
    margin-bottom: 5px;
    color:#424242;
    font-size: 35px;
  }
  .pbigger {
    font-size: 25px;
    color:#424242;
    padding: 0px;
    margin: 0px;
  }
  .p {
    font-size: 20px;
    color:#424242;
    padding: 0px;
    margin: 2px;
  }
  .para {
      margin: 20px;
      margin-right: 50px;
      padding: 10px;
  }
</style>