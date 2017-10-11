import api from './api'

export default {
  index(search) {
    return api().get('/songs', {
      params: {
        search: search
      }
    })
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
