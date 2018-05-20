<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md3>
        <v-card color="deep-orange lighten-3" class="white--text" >
          <v-container fluid>
            <v-layout column>
            <v-card color="cyan lighten-2" class="white--text" fluid>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                    <div class="text-xs-center">
                      <div class="heading">{{ meetup.title }}</div>
                      <div color="black">{{ meetup.subject }}</div>
                    </div>
                    <v-card-actions fluid>
                      <v-btn flat :to="'sessions/'+ meetup.id">
                        <v-icon left light>arrow_forward</v-icon>
                        View Session
                      </v-btn>
                      <v-btn v-if="user.email === meetup.email" @click="deleteSession(meetup)" flat>
                        <v-icon right light>delete</v-icon>
                        Delete Session
                      </v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default{
  data() {
    return {
      user: this.$store.getters.user
    }
  },
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  },
  methods: {
    deleteSession(item) {
      this.$store.dispatch('deleteSession', item)
    }
  }
}
</script>
<style>
  .heading{
    /* color: sienna; */
    color: #424242;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 30px;
    text-decoration-style: solid;
    background-color: #4DD0E1;
  }
</style>