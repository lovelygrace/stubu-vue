<template>
  <v-container>
    <section>
      <v-parallax src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="600">
        <v-layout row>
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          <v-card width="900">
              <v-card-text>
                <v-container>
                  <form @submit.prevent="onSignin">
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="email"
                          label="Mail"
                          id="email"
                          v-model="email"
                          type="email"
                          required>
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          name="password"
                          label="Password"
                          id="password"
                          v-model="password"
                          type="password"
                          required>
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn color="deep-orange lighten-3" type="submit">Sign in</v-btn>
                      </v-flex>
                    </v-layout>
                  </form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-layout>
      </v-parallax>
    </section>
  </v-container>
</template>

<script>
export default{
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }
  }
}
</script>
