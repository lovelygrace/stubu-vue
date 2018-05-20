<template>
    <v-container>
        <v-layout row wrap child-flex>
            <v-flex xs12 sm11 md10 offset-sm1 offset-md1>
                <v-card class="firstcard" color="deep-orange lighten-3">
                    <div class="text-xs-center">
                      <div class="head">{{ meetup.title }}</div>
                      <div class="pbigger">{{ meetup.subject }}</div>
                      <div class="pbigger">{{ meetup.description }}</div>
                    </div>
                </v-card>
                <v-card color="cyan lighten-2" >
                    <div class="text-xs-center">
                      <div class="head">Tutee details:</div>
                    </div>
                    <v-layout ml-5>
                      <v-layout ml-5>
                        <div class="para">
                          <div class="p">Name: {{ meetup.firstname }} {{ meetup.lastname }}</div>
                          <div class="p">Email:{{ meetup.email }}</div>
                          <div class="p">Contact:{{ meetup.contactnumber }}</div>
                          <div class="p">Contact:{{ meetup.id }}</div>
                        </div>
                      </v-layout>
                    </v-layout>
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

<style>
  .firstcard {
      margin-bottom: 15px;
      background-color: #FFAB91;
      padding-bottom: 20px;
  }
  .head {
    padding-top: 20px;
    padding-left: 2px;
    padding-right: 2px;
    margin-bottom: 5px;
    color:#424242;
    font-size: 35px;
  }
  .pbigger {
    font-size: 25px;
    color:#424242;
    padding: 0px;
    margin: 0px;
  }
  .p {
    font-size: 20px;
    color:#424242;
    padding: 0px;
    margin: 2px;
  }
  .para {
      margin: 20px;
      margin-right: 50px;
      padding: 10px;
  }
</style>