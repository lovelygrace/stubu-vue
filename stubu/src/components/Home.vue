<template>
  <v-container class="main">
    <div class="heading">
      <h1>LOOKING FOR A TUTOR OR STUDY BUDDY? STUBU HAS GOT YOU COVERED.</h1>
    </div>
    <v-card flat color="grey lighten-2">
    <v-container fluid>
      <v-layout row child-flex wrap>
        <div>
          <v-toolbar>
            <v-text-field label="What subject can we help you with?"></v-text-field>
            <v-btn icon >
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
      </v-layout>
    </v-container>
  </v-card>
    <v-layout row wrap  class="ma-4">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <!-- <v-carousel-item
          v-for="meetup in meetups"
          :src="meetup.imageUrl"
          :key="meetup.id"
          @click="onLoadMeetup('1')">
          <div class="title">
            {{ meetup.title }}
          </div>
          </v-carousel-item> -->
          <v-carousel-item
          v-for="pic in pics"
          :src="pic.link"
          :key="pic.title"
          @click="onLoadMeetup('1')">
          <div class="title">
            {{ pic.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <!-- <v-footer height="auto">
    <v-card flat tile class="flex">
      <v-card-actions class="grey lighten-2 justify-center">
        &copy;2018 — <strong>STUBU</strong>
      </v-card-actions>
    </v-card>
  </v-footer> -->
  <v-footer class="foot" height="auto">
    <v-card flat tile class="flex" >
      <v-card-title class="grey lighten-2">
        <strong class="subheading">We've got you all covered</strong>
        <v-spacer></v-spacer>
        <v-btn>View All Subjects</v-btn>
        <!-- <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          dark
          class="mx-3"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn> -->
      </v-card-title>
      <v-card-text>
        <v-layout>
          <v-flex
            v-for="(col, i) in rows"
            :key="i"
            xs3
          >
            <span class="body-2" v-text="col.title.toUpperCase()"></span>
            <div
              v-for="(child, i) in col.children"
              :key="i"
              v-text="child"
            ></div>
          </v-flex>
          <v-flex xs3 layout column>
            <span class="body-2">CONTACT</span>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
              Cebu City, Philippines 6000
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
              stubu@gmail.com
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
              + 01 234 567 88
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
              + 01 234 567 89
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        &copy;2018 — <strong>STUBU</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      pics: [
        {title: 'Meet at Home or Online', link: 'https://s9.postimg.cc/h9vxugyxr/first.png'},
        {title: 'Achieve Academic Results', link: 'https://s9.postimg.cc/580k0ccun/second.png'},
        {title: 'Find the Perfect Tutor for you', link: 'https://s9.postimg.cc/esk6n7ugv/third.png'}
      ],
      rows: [
        {
          title: 'Math',
          children: ['Algebra', 'Trigonometry', 'Calculus']
        },
        {
          title: 'Science',
          children: ['General Science', 'Biology', 'Chemistry', 'Physics']
        },
        {
          title: 'English',
          children: ['Writing', 'Grammar', 'Communication', 'Literature']
        }
      ]
    }
  },
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/sessions/1')
    }
  }
}
</script>

<style>
  .title{
    position: auto  ;
    bottom: 50 px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 20px;
  }
  .heading{
    /* color: sienna; */
    color: #424242;
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center;
    text-decoration-style: solid;
    background-color: #E0E0E0;
    /* background-color:#FFE0B2;  */
  }
</style>
