import api from './api'

export default {
  async index(search) {
    return (await api().get('/songs', {
      params: {
        search: search
      }
    })).data
  },
  async create(song) {
    return (await api().post('/songs', song)).data
  },
  async get(id) {
    return (await api().get(`/songs/${id}`)).data
  },
  async update(song) {
    return (await api().put(`/songs/${song.id}`, song)).data
  }
}
