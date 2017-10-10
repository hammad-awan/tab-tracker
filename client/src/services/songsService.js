import api from './api'

export default {
  index() {
    return api().get('/songs')
  },
  post(song) {
    return api().post('/songs', song)
  },
  get(id) {
    return api().get(`/songs/${id}`)
  },
  put(song) {
    return api().put(`/songs/${song.id}`, song)
  }
}
