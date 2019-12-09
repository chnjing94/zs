import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    editAreaId: 'BackgroundLongImg',
    backgroundLongImg: {},
    fixedFloatingWindow: {},
    floatText: {},
    floatWindow: {},
    subtitle: {},
    fixedBanner: {},
    footText: {},
    slideBanner: {},
    adAreaMid: {},
    adAreaBottm: {},
    fiveBanners: {
      ad1: {},
      ad2: {},
      ad3: {},
      ad4: {},
      ad5: {}
    },
  },

  mutations: {
    changeEditArea(state, data) {
      state.editAreaId = data
    },

    changeBackgroundLongImg(state, data) {
      state.backgroundLongImg = { ...state.backgroundLongImg, ...data }
    },

    changeFixedFloatWindow (state, data) {
      state.fixedFloatingWindow = { ...state.fixedFloatingWindow, ...data }
    },

    changeFloatText (state, data) {
      state.floatText = { ...state.floatText, ...data }
    },

    changeFloatWindow (state, data) {
      state.floatWindow = { ...state.floatWindow, ...data }
    },

    changeSubtitle (state, data) {
      state.subtitle = { ...state.subtitle, ...data }
    },

    changeFixedBanner (state, data) {
      state.fixedBanner = { ...state.fixedBanner, ...data }
    },

    changeFootText (state, data) {
      state.footText = { ...state.footText, ...data }
    },

    changeSlideBannerTitle (state, data) {
      state.slideBanner = { ...state.slideBanner, ...data }
    },

    changeAdAreaMidTitle (state, data) {
      state.adAreaMid = { ...state.adAreaMid, ...data }
    },

    changeAdAreaBottmTitle (state, data) {
      state.adAreaBottm = { ...state.adAreaBottm, ...data }
    },

    changeFiveBannersBackground (state, data) {
      state.fiveBanners[data.n].banner = {...state.fiveBanners[data.n].banner, ...data.payload}
    },

  },
})