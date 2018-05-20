<template>
  <v-container class="main" height="1000">
    <v-parallax src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="700">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
      <h1 class="white--text mb-2 display-1 text-xs-center">LOOKING FOR A TUTOR OR STUDY BUDDY? STUBU HAS GOT YOU COVERED.</h1>
      <h2 class="white--text mb-2 display-1 text-xs-center">STUBU HAS GOT YOU COVERED.</h2>
      </v-layout>
    </v-parallax>
    <v-card flat color="grey lighten-2">
    <v-container fluid>
      <v-layout row child-flex wrap>
        <div>
          <v-toolbar v-if="authenticated === true">
            <!-- <v-text-field label="What subject can we help you with?"></v-text-field> -->
            <v-select
              :items="subs"
              :filter="customFilter"
              v-model="subject"
              item-text="name"
              label="Select a subject"
              autocomplete
            ></v-select>
            <v-btn icon @click="getTutors" @click.native="dialog = true" v-if="subject !== ''"> <v-icon>search</v-icon></v-btn>
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
             <template v-for="item in tutorss">
              <v-list-tile v-if :key="item.firstname" avatar @click="getAvatar(item)" @click.native="dialogprofile = true">
                <v-list-tile-avatar>
                <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.about"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogprofile" scrollable max-width="600px">
      <v-card>
        <v-card-title><h1>{{tutorfn}} {{tutorln}}</h1></v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 500px;">
            <!-- xdxd -->
            <h2>Subject: </h2><p>{{tutorsub}}</p>
            <h2>Contact Number: </h2><p>{{tutorcontact}}</p>
            <h2>Email: </h2><p>{{tutoremail}}</p>
            <h2>Degree: </h2><p>{{tutordegree}}</p>
            <h2>About: </h2><p>{{tutorabout}}</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialogprofile = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-container>
  </v-card>
    <v-layout row wrap  class="ma-4">
      <v-flex xl12>
        <v-carousel style="cursor: pointer">
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
  <v-footer class="foot" height="auto">
    <v-card flat tile class="flex" >
      <v-card-actions class="title" >
        &copy;2018 — <strong>STUBU</strong>
        <v-spacer></v-spacer>
        <!-- <v-btn color="deep-orange lighten-3">View All Subjects</v-btn> -->
      <v-dialog v-model="dialogall" scrollable max-width="300px">
            <v-btn slot="activator" color="deep-orange" dark>View All Subjects</v-btn>
            <v-card>
              <v-card-title>SUBJECTS</v-card-title>
              <v-divider></v-divider>
              <v-list two-line>
                <template v-for="sub in subs">
                <v-list-tile :key="sub.name">
                  <v-list-tile-content>
                  <v-list-tile-title v-html="sub.name"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
              <v-card-text style="height: 300px;">
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" flat @click.native="dialogall = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      dialogall: false,
      authenticated: false,
      subject: '',
      dialog: false,
      dialogprofile: false,
      tutorfn: 'xd',
      tutorln: '',
      tutorcontact: '',
      tutorabout: '',
      tutoremail: '',
      tutordegree: '',
      tutorsub: '',
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
      tutorss: [],
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
    },
    
  },
  methods: {
    checkAuthentication () {
      this.authenticated = false
      if (this.tutorIsAuthenticated() && this.userIsAuthenticated() || this.tuteeIsAuthenticated() && this.userIsAuthenticated()) {
        this.authenticated = true
      }
      // console.log('a + ' + this.tutorIsAuthenticated())
      // console.log('b + ' + this.tuteeIsAuthenticated())
      // console.log('c + ' + this.userIsAuthenticated())
      
      console.log(this.authenticated)
    },
    clickMe () {
      this.$store.dispatch('potatoUp')
    },
    onLoadMeetup (id) {
      this.$router.push('/sessions/1')
    },
    getSubjects() {
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
    getAvatar(item) {
      console.log(item.contactnumber)
      this.tutorfn  = item.firstname
      this.tutorln = item.lastname
      this.tutorcontact = item.contactnumber
      this.tutorabout = item.aboutme
      this.tutoremail = item.email
      this.tutordegree = item.degree
      this.tutorsub = item.subject
    },
    getTutors() {
      var whatsub = this.subject.name
      var sref = firebase.database()
      sref.ref('tutors').orderByChild('subject').equalTo(whatsub).on('value', (snapshot) => {
        this.tutorss = Object.entries(snapshot.val())
          .map(([key, value]) => {
            const { aboutme: about, firstname, lastname } = value
            return {
              ...value,
              name: `${firstname} ${lastname}`, about,
              avatar: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-HalmhpOW7cU%2FVk1p5Q7_jeI%2FAAAAAAAAE7k%2FmLaDIv1oOVw%2Fs1600%2FCuteAvatar1.png&f=1',
              id: key
            }
          })
      })
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
/*    getTutorProfile(){

    }*/
  searchTutors () {
    this.getTutors()
  },
  beforeMount () {
    this.getSubjects()
    this.checkAuthentication()
  }
}
</script>

<style>
  .title{
    position: auto  ;
    bottom: 50 px;
    background-color: #4DD0E1;
    color:#424242;
    padding: 30px;
  }
  .heading{
    /* color: sienna; */
    color: #424242;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    font-size: 30px;
    text-decoration-style: solid;
    background-color: #4DD0E1;
    /* background-color:#FFE0B2;  */
  }
</style>
