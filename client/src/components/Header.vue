<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="/" class="btn cyan">
        <v-btn flat dark>
          Tab Tracker
        </v-btn>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer>
    </v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <router-link to="/login" class="btn cyan">
        <v-btn flat dark>
          Login
        </v-btn>
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark @click="logout">
        Logout
      </v-btn>
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <router-link to="/register" class="btn cyan">
        <v-btn flat dark>
          Sign Up
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    async logout() {
      this.$store.dispatch('setToken', null, this.$router)
      this.$router.push('login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
