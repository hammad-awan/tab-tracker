<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field id="email" label="Email" v-model="email"></v-text-field>
            <v-text-field type="password" id="password" label="Password" v-model="password" autocomplete="new-password"></v-text-field>
            <v-btn class="cyan" @click="register" dark>Register</v-btn>
            <div class="danger-alert" v-html="error"></div>
          </form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationService from '../services/authenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await authenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.storeTokenAndUser(response.data)
        this.$router.push({name: 'songs'})
      } catch (ex) {
        this.error = ex.response.data.error
      }
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
