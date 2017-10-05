<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email" name="email" placeholder="email" v-model="email" />
          <br/>
          <input type="password" name="password" placeholder="password" v-model="password" />
          <br/>
          <v-btn class="cyan" @click="register">Register</v-btn>
          <div class="error" v-html="error"></div>
        </div>

      </div>
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
        if (response.data) {
        }
      } catch (ex) {
        this.error = ex.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
</style>
