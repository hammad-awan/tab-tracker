import api from './api'

export default {
  async index(userId) {
    return (await api().get('/song-history', {
      params: {
        userId: userId
      }
    })).data
  },
  async create(songHistory) {
    return (await api().post('/song-history', songHistory)).data
  }
}
