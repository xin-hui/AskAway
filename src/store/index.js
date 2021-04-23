import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    red : false
  },
  getters: {
    getMarked(state) {
      return state.red;
    }
  },
  mutations: {
    bookmark(state) {
      state.red = !state.red;
    }
  },
  actions: {
  },
  modules: {
  }
})
