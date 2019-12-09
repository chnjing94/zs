import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    editAreaId: 'BackgroundLongImg',
    currentBannerIndex: 0,
    backgroundLongImg: {},
    fixedFloatingWindow: {},
    floatText: {},
    floatWindow: {},
    subtitle: {},
    fixedBanner: {},
    footText: {},
    slideBanner: {
      banners: [{}]
    },
    adAreaMid: {},
    adAreaBottm: {},
    fiveBanners: {
      ad1: {
        banner: {},
        title: {},
        subtitle: {}
      },
      ad2: {
        banner: {},
        title: {},
        subtitle: {}
      },
      ad3: {
        banner: {},
        title: {},
        subtitle: {}
      },
      ad4: {
        banner: {},
        title: {},
        subtitle: {}
      },
      ad5: {
        banner: {},
        title: {},
        subtitle: {}
      }
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

    changeFiveBannersTitle (state, data) {
      state.fiveBanners[data.n].title = {...state.fiveBanners[data.n].title, ...data.payload}
    },

    changeFiveBannersSubtitle (state, data) {
      state.fiveBanners[data.n].subtitle = {...state.fiveBanners[data.n].subtitle, ...data.payload}
    },

    changeFiveBannersGuideIcon (state, data) {
      state.fiveBanners[data.n] = {...state.fiveBanners[data.n], ...data.payload}
    },

    changeSlideBanner (state, data) {
      state.slideBanner.banners[data.n] = {...state.slideBanner.banners[data.n], ...data.payload}
    },

    deleteSlideBanner (state, data) {
      state.slideBanner.banners.splice(data, 1)
    },

    setCurrentBannerIndex (state, data) {
      state.currentBannerIndex = data
    }
  },
})