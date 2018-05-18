<template>
  <v-app dark>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">STUBU</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn flat
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link">
            {{ item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer temporary v-model="sideNav" class="hidden-sm-and-up" >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
            <v-list-tile-content> {{item.title}} </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
        <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Sign up', link: '/signup' },
        { title: 'Sign in', link: '/signin' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: 'Home', link: '/' },
          { title: 'About', link: '/about' },
          { title: 'Sessions', link: '/sessions' },
          { title: 'New Session', link: '/session/new' },
          { title: 'Profile', link: '/profile' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
