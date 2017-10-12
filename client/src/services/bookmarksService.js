import api from './api'

function createBookmarkParams(songId, userId) {
  return {
    songId: songId,
    userId: userId
  }
}

export default {
  index(songId, userId) {
    return api().get('/bookmarks', { params: createBookmarkParams(songId, userId) })
  },
  add(songId, userId) {
    return api().post('/bookmarks', createBookmarkParams(songId, userId))
  },
  remove(bookmarkId) {
    return api().delete(`/bookmarks/${bookmarkId}`)
  }
}
