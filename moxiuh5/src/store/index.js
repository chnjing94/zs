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
      state.backgroundLongImgStyle.backgroundImage = url
    }
  },

  actions: {
    changeBackgroundLongImg({commit}) {
      setTimeout(()=>{
        commit('changeBackgroundLongImg', 'url(' + require('../image/背景.png') + ')')
      }, 2000)
    }
  },
})