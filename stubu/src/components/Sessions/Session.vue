<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card color="red accent-4" >
                    <v-card-title>
                        <h4 class="white--text">MY SESSION</h4>
                    </v-card-title>
                    <v-card-media
                        src="https://4.bp.blogspot.com/-wTXFNsSCOO0/V8_5vPaPZNI/AAAAAAAAKbs/yjXbI-KMvO4FK7X4euGiHFtwQKB48xeAwCLcB/s640/DSCF7549.jpg"
                        height= "300px">
                    </v-card-media>
                    <v-card-text>
                        <div class="white--text">17th July 2017 - Where it takes place</div>
                        <div>Lorem ipsum sdfnsakdjnaksjngsakdgksadgnaksjdgsdngjkadsgnsadkgnasdgfsaadfasddasfsfasdfsadfsadfsadfasdfasdfsad
                            gsadgadgsadgsdasdgasddgasdg</div>
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
      return this.$store.getters.loadedMeetup(this.$route)
    }
  }
}
</script>
