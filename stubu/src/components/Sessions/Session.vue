<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card color="red accent-4" >
                    <v-card-title>
                        <h4 class="white--text">{{ meetup.title }}</h4>
                    </v-card-title>
                    <v-card-media
                        :src= "meetup.imageUrl"
                        height= "300px">
                    </v-card-media>
                    <v-card-text>
                        <div class="white--text">{{ meetup.date | date}}- {{meetup.location}}</div>
                        <div>{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn medium flat>Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default{
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
