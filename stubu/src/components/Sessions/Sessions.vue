<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md3>
        <v-card color="teal" class="white--text" >
          <v-container fluid>
            <v-layout column>
            <v-card color="teal lighten-1" class="white--text" fluid>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs6 sm7>
                    <div class="text-xs-center">
                      <div class="headline">{{ meetup.title }}</div>
                      <div>{{ meetup.date | date }}</div>
                    </div>
                    <v-card-actions fluid>
                      <v-btn flat :to="'sessions/'+ meetup.id">
                        <v-icon left light>arrow_forward</v-icon>
                        View Session
                      </v-btn>
                    </v-card-actions>
                  </v-flex>
                  <v-flex xs6 sm5>
                    <v-card-media
                      :src="meetup.imageUrl"
                      height="130px"
                    ></v-card-media>
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
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
