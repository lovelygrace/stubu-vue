<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-md-center">
        <h4 class="headline">Create A New Tutorial Session</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="subject"
                label="Subject"
                id="subject"
                v-model="subject"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <!-- <p>{{ this.myInfoTutee.firstname }}</p>
            <p>{{ this.myInfoTutee.lastname }}</p>
            <p>{{ this.myInfoTutee.contactnumber }}</p>
            <p>{{ this.myInfoTutee.email }}</p>
            <p>HHHHHHHHUYYYYY</p> -->
          </v-layout>
          <!-- <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn raised @click="onPickFile"> Upload Image</v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150" alt="">
            </v-flex>
          </v-layout> -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="desciption"
                label="Description"
                id="desciption"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn :disabled="!formIsValid"
              type="submit"> Create Session </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default{
  data () {
    return {
      title: '',
      subject: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
       this.subject !== '' &&
       this.description !== ''
    },
    submittableDateTime () {
      const date = new Date(this.date)
      return date
    },
    myInfoTutee () {
      return this.$store.getters.tutee
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        subject: this.subject,
        description: this.description,
        firstname: this.myInfoTutee.firstname,
        lastname: this.myInfoTutee.lastname,
        contactnumber: this.myInfoTutee.contactnumber,
        email: this.myInfoTutee.email
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/sessions')
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }

  }
}
</script>
