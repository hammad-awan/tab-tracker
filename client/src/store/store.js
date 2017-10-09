import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      state.isUserLoggedIn = !!token
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    }
  }
})

Store.storeTokenAndUser = function ({ token, user }) {
  this.dispatch('setToken', token)
  this.dispatch('setUser', user)
}

export default Store
