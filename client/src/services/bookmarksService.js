import api from './api'

function createBookmarkParams(songId, userId) {
  return {
    songId: songId,
    userId: userId
  }
}

export default {
  async index(userId, songId) {
    return (await api().get('/bookmarks', { params: createBookmarkParams(songId, userId) })).data
  },
  async add(userId, songId) {
    return (await api().post('/bookmarks', createBookmarkParams(songId, userId))).data
  },
  async remove(bookmarkId) {
    return (await api().delete(`/bookmarks/${bookmarkId}`)).data
  }
}
