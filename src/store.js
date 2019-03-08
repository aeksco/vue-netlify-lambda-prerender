import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: '',
    loading: false
  },
  mutations: {
    msg (state, msg) { state.msg = msg },
    loading (state, loading) { state.loading = loading }
  },
  actions: {
    fetchMessage ({ commit }) {
      commit('loading', true)
      axios.get('/.netlify/functions/hello')
      .then(({ data }) => {
        // Adds a 1 second delay to illustrate asyc behavior
        // setTimeout can/should be removed
        setTimeout(() => {
          commit('msg', data.msg)
          commit('loading', false)
        }, 1000)
      })
      .catch(() => {
        commit('loading', false)
      })
    }
  }
})
