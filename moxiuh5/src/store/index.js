import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    backgroundLongImgStyle: {
      backgroundImage: '',
      backgroundSize: 'auto'
    },
  },

  mutations: {
    changeBackgroundLongImg(state, url) {
      state.backgroundLongImgStyle.backgroundImage = 'url(' + require('../' + url) + ')'
    }
  },

  actions: {
    changeBackgroundLongImg() {
    }
  },
})