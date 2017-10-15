import api from './api'

export default {
  async index(userId) {
    return (await api().get('/song-history')).data
  },
  async create(songId) {
    return (await api().post('/song-history', {
      songId: songId
    })).data
  }
}
