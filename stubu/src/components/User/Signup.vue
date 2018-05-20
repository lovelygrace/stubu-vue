<template>
  <v-layout row wrap justify-center>
    <v-dialog v-model="dialog1" persistent max-width="500px">
      <v-btn slot="activator" color="teal" dark>For Tutor</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Tutor User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
            <form ref="tutorform" lazy-validation>
              <v-flex xs12>
                <v-text-field
                name="first name"
                label="First Name"
                id="firstname1"
                v-model="tutorfirstname"
                :rules="firstnameRules"
                required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="last name"
                  label="Last Name"
                  id="lastname1"
                  v-model="tutorlastname"
                  :rules="lastnameRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="contact number"
                  label="Contact Number"
                  id="contactnumber1"
                  v-model="tutorcontactnumber"
                  :rules="contactnumberRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                name="degree"
                label="Degree"
                id="degree"
                v-model="tutordegree"
                required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                label="Email"
                v-model="tutoremail"
                :rules="emailRules"
                required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                label="Password"
                type="password"
                v-model="tutorpassword"
                :rules="passwordRules"
                required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirmpassword1"
                v-model="tutorconfirmpassword"
                :rules="confirmpasswordRules"
                required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Algebra', 'Biology', 'Calculus', 'Chemistry', 'Communication', 'General Science', 'Grammar', 'Literature', 'Physics', 'Trigonometry', 'Writing']"
                  label="Subject"
                  v-model="tutorsubject"
                  autocomplete
                  required
                  chips
                ></v-select>
               <v-flex xs12>
               <v-text-field
                name="about me"
                label="About Me"
                id="aboutme"
                v-model="tutoraboutme"
                multi-line></v-text-field>
              </v-flex>
              </v-flex>
          </form>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog1 = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="onSignupTutor" type="submit">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" persistent max-width="500px">
      <v-btn slot="activator" color="teal" dark>For Tutee</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Tutee User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
            <form ref="tuteeform" lazy-validation>
              <v-flex xs12>
                <v-text-field
                name="first name"
                label="First Name"
                id="firstname2"
                v-model="tuteefirstname"
                :rules="firstnameRules"
                required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="last name"
                  label="Last Name"
                  id="lastname2"
                  v-model="tuteelastname"
                  :rules="lastnameRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="contact number"
                  label="Contact Number"
                  id="contactnumber2"
                  v-model="tuteecontactnumber"
                  :rules="contactnumberRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                label="Email"
                v-model="tuteeemail"
                :rules="emailRules"
                required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                label="Password"
                type="password"
                v-model="tuteepassword"
                :rules="passwordRules"
                required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirmpassword2"
                v-model="tuteeconfirmpassword"
                required></v-text-field>
              </v-flex>
          </form>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog2 = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="onSignupTutee" type="submit">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      valid1: true,
      valid2: true,
      dialog1: false,
      dialog2: false,
      tutorfirstname: '',
      tutorlastname: '',
      tutorcontactnumber: '',
      tutordegree: '',
      tutoremail: '',
      tutorpassword: '',
      tutorconfirmpassword: '',
      tutorsubject: '',
      tutoraboutme: '',
      tuteefirstname: '',
      tuteelastname: '',
      tuteecontactnumber: '',
      tuteeemail: '',
      tuteepassword: '',
      tuteeconfirmpassword: '',
      firstnameRules: [
        v => !!v || 'First Name is required'
      ],
      lastnameRules: [
        v => !!v || 'Last Name is required'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Name must be more than 6 characters'
      ],
      contactnumberRules: [
        v => !!v || 'Contact Number is required',
        v => /^[0][9]\d{9}$/.test(v) || 'Contact Number must be valid'
      ],
      confirmpasswordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  computed: {
    tutor () {
      return this.$store.getters.tutor
    },
    tutee () {
      return this.$store.getters.tutee
    }
  },
  watch: {
    tutor (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    },
    tutee (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignupTutor () {
      this.$store.dispatch('signTutorUp', { email: this.tutoremail, password: this.tutorpassword, firstname: this.tutorfirstname, lastname: this.tutorlastname, contact: this.tutorcontactnumber, degree: this.tutordegree, subject: this.tutorsubject, about: this.tutoraboutme })
    },
    onSignupTutee () {
      this.$store.dispatch('signTuteeUp', { email: this.tuteeemail, password: this.tuteepassword, firstname: this.tuteefirstname, lastname: this.tuteelastname, contact: this.tuteecontactnumber })
    },
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : true
    }
  }
}
</script>
