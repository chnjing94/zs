import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    backgroundLongImgStyle: {
      backgroundImage: '',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
  },

  mutations: {
    changeBackgroundLongImg(state, url) {
      if (url) {
        state.backgroundLongImgStyle.backgroundImage = 'url(' + require('../' + url) + ')'
      } else {
        state.backgroundLongImgStyle.backgroundImage = ''
      }
    }
  },

  actions: {
    changeBackgroundLongImg() {
    }
  },
})