<template>
  <div>
    <v-container>
      <v-card color="deep-orange lighten-3">
        <h1 class="header">WHY STUBU SERVICE WAS CREATED</h1>
      </v-card>
      <v-card>
        <p class="bluee">STUBU was created to promote student success by increasing access to one-on-one education. Colleges and universities across the country get frequent phone calls from parents of high school students looking for high quality, inexpensive peer tutors for their children. Parents want to find tutors for a variety of situations, from the student who is having difficulty passing algebra, to the AP student who needs a tutor and role model. Most tutoring companies are not affordable for the majority of families. ln addition, at some colleges and universities there may be limited tutoring available for students with upper level courses in departments such as physics, chemistry, engineering, finance, and language. STUBU helps solve these problems by providing a safe, simple environment for connecting students and parents in-person and online with private tutors across a wide variety of subjects.</p>
      </v-card>
      <v-footer class="foot" height="auto">
    <v-card flat tile class="flex" >
      <!-- <v-card-title class="orangex" color="deep-orange lighten-3">
        <strong class="subheading">We've got you all covered</strong>
        <v-spacer></v-spacer>
        <v-btn >View All Subjects</v-btn>
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
      </v-card-text> -->
      <v-card-actions class="orangex" color="deep-orange lighten-3">
        &copy;2018 — <strong>STUBU</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
    </v-container>
  </div>
</template>

<script>
export default{
  data () {
    return {
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
  }
}
</script>

<style>
  .header {
    padding-top: 100px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    font-size: 40px;
    color:#424242;
  }
  .p {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    text-justify: initial;
    color:#424242;
  }
  .header2{
    text-align: center;
    padding-top: 50px;
  }
  .p2 {
    padding-top: 20px;
    text-align: center;
    padding-bottom: 20px;
    color: #424242;
  }
  .orangex {
    padding-top: 20px;
    text-align: center;
    padding-bottom: 20px;
    background-color: #FFAB91;
  }
  .bluee {
    margin-top: 40px;
    padding-top: 80px;
    text-align: center;
    padding-bottom: 40px;
    padding-left: 80px;
    padding-right: 80px;
    background-color: #4DD0E1;
    font-size: 18px;
  }
</style>