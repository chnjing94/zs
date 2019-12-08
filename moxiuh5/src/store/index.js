import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    backgroundLongImg: {}
  },

  mutations: {
    changeBackgroundLongImg(state, data) {
      state.backgroundLongImg = { ...state.backgroundLongImg, ...data }
    }
  },
})