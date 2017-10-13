import api from './api'

export default {
  async register(credentials) {
    return (await api().post('/register', credentials)).data
  },
  async login(credentials) {
    return (await api().post('/login', credentials)).data
  }
}
