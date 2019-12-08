import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    editAreaId: 'BackgroundLongImg',
    backgroundLongImg: {},
    fixedFloatingWindow: {},
    floatText: {}
  },

  mutations: {
    changeBackgroundLongImg(state, data) {
      state.backgroundLongImg = { ...state.backgroundLongImg, ...data }
    },

    changeFixedFloatWindow (state, data) {
      state.fixedFloatingWindow = { ...state.fixedFloatingWindow, ...data }
    },

    changeFloatText (state, data) {
      state.floatText = { ...state.floatText, ...data }
    },

    changeEditArea(state, data) {
      state.editAreaId = data
    }
  },
})