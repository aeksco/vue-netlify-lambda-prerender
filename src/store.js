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
        commit('msg', data.msg)
        commit('loading', false)
      })
      .catch(() => {
        commit('loading', false)
      })
    }
  }
})
