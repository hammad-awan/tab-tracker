<template>
  <div>
    <h1>Register</h1>
    <label for="name">Email:</label>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br/>
    <label for="password">Password:</label>
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br/>
    <button @click="register">Register</button>
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async register() {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      if (response.data) {
        this.message = response.data.message
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
