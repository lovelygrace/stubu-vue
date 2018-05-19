<template>
  <v-container class="main">
    <div class="heading">
      <h1 class="white--text">LOOKING FOR A TUTOR OR STUDY BUDDY? STUBU HAS GOT YOU COVERED.</h1>
    </div>
    <v-card flat color="teal">
    <v-container fluid>
      <v-layout row child-flex wrap>
        <div>
          <v-toolbar>
            <!-- <v-text-field v-model="subject" label="What subject can we help you with?"></v-text-field> -->
            <v-select
              :items="subs"
              :filter="customFilter"
              v-model="subject"
              item-text="name"
              label="Select a subject"
              autocomplete
            ></v-select>
            <v-btn icon @click.native="dialog = true" v-if="subject !== ''"> <v-icon>search</v-icon></v-btn>
          </v-toolbar>
        </div>
      </v-layout>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <v-toolbar dark color="teal">
            <v-btn icon dark @click.native="dialog=false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ this.subject.name }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
            <v-list two-line>
             <template v-for="item in temporary">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.firstname"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.about"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-dialog>
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
      <v-card-title class="teal">
        <strong class="subheading">We've got you all covered</strong>
        <v-spacer></v-spacer>
        <v-btn @click="getTutors" @click.native="dialog=true">View All Subjects</v-btn>
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
      <v-card-actions class="teal justify-center">
        &copy;2018 — <strong>STUBU</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'
export default{
  data () {
    return {
      subject: '',
      dialog: false,
      pics: [
        {title: 'Meet at Home or Online', link: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.15752-9/32658812_2002374696747426_2618684020417888256_n.png?_nc_cat=0&oh=49f736d9cadfec4f5ab52e7def5e76f9&oe=5B885539'},
        {title: 'Achieve Academic Results', link: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.15752-9/32562041_2002375833413979_9152861760619806720_n.png?_nc_cat=0&oh=d0fd692931bcaafabab1389fb4b00238&oe=5B8B28CE'},
        {title: 'Find the Perfect Tutor for you', link: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.15752-9/32590519_2002375856747310_3258431820202508288_n.png?_nc_cat=0&oh=03a5890b60cbd97b9cc4949958e30da3&oe=5B9C1613'}
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
      ],
      subjects: [
        { name: 'Algebra', abbr: 'AL', id: 1 },
        { name: 'Geometry', abbr: 'GE', id: 2 },
        { name: 'Trigonometry', abbr: 'TR', id: 3 },
        { name: 'MIPS', abbr: 'MI', id: 4 },
        { name: 'Automata', abbr: 'AU', id: 5 },
        { name: 'Science', abbr: 'SC', id: 6 }
      ],
      temporary: [{
        firstname: 'Lovely',
        lastname: 'Arsolon',
        about: 'Gikapoy nami help',
        id: 0
      }],
      subs: []
    }
  },
  customFilter (item, queryText, itemText) {
    const hasValue = val => val != null ? val : ''
    const text = hasValue(item.name)
    const query = hasValue(queryText)
    return text.toString()
      .toLowerCase()
      .indexOf(query.toString().toLowerCase()) > -1
  },
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    clickMe () {
      this.$store.dispatch('potatoUp')
    },
    onLoadMeetup (id) {
      this.$router.push('/sessions/1')
    },
    getSubjects: function () {
      this.subs = []
      var sref = firebase.database().ref('subject')
      var i = 1
      sref.on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
          const sub = childSnapshot.key
          console.log(sub)
          this.subs.push({ name: sub, id: i })
          i++
        })
      })
    },
    getTutors: function () {
      this.tutors = []
      console.log(this.subject.name)
      var whatsub = this.subject.name
      var sref = firebase.database()
      var i = 1
      const temporary = []
      sref.ref('tutors').orderByChild('subject').equalTo(whatsub).on('value', function (snapshot) {
        console.log(snapshot.val())
        console.log(typeof(snapshot))
        snapshot.forEach(data => {
          const tutor = data.val()
          console.log(tutor.firstname)
          temporary.push({ firstname: tutor.firstname })
          // i++
          // console.log(data.key)
          // console.log(data.val)
          // var tutor = data.key
          // console.log(tutor.firstname)
          // console.log(tutor.subject)
          console.vm.$log([keyPath-optional])
        })
      })
    }
  },
  searchTutors () {
    this.getTutors()
  },
  beforeMount () {
    this.getSubjects()
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
    background-color: #009688;
    /* background-color:#FFE0B2;  */
  }
</style>
