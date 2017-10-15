import api from './api'

function createBookmarkParams(songId) {
  return {
    songId: songId
  }
}

export default {
  async index(songId) {
    return (await api().get('/bookmarks', { params: createBookmarkParams(songId) })).data
  },
  async add(songId) {
    return (await api().post('/bookmarks', createBookmarkParams(songId))).data
  },
  async remove(bookmarkId) {
    return (await api().delete(`/bookmarks/${bookmarkId}`)).data
  }
}
