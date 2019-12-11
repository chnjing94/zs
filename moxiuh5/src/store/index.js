import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    editAreaId: 'BackgroundLongImg',
    currentBannerIndex: 0,
    dataLoaded: false,

    backgroundLongImg: {},
    fixedFloatingWindow: {},
    floatText: {
      text: '领导寄语',
      show: true
    },
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
    hexOpacity2rgba: (color, opacity) => {
      let colorChange = [];
      for (var i = 1; i < 7; i += 2) {
        colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
      }
      let alph = 1 - opacity / 100
      colorChange.push(alph)
      return "rgba(" + colorChange.join(',') + ')'
    },
  },

  mutations: {
    loadData (state, data) {
      const { backgroundLongImg, fixedFloatingWindow, floatText, floatWindow, subtitle, fixedBanner, footText, slideBanner, adAreaMid, adAreaBottm, fiveBanners} = data
      state.backgroundLongImg = backgroundLongImg
      state.fixedFloatingWindow = fixedFloatingWindow
      state.floatText = floatText
      state.floatWindow = floatWindow
      state.subtitle = subtitle
      state.fixedBanner = fixedBanner
      state.footText = footText
      state.slideBanner = slideBanner
      state.adAreaMid = adAreaMid
      state.adAreaBottm = adAreaBottm
      state.fiveBanners = fiveBanners
      state.dataLoaded = true
    },

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
      Vue.set(state.slideBanner.banners, data.n, {...state.slideBanner.banners[data.n], ...data.payload})
    },

    deleteSlideBanner (state, data) {
      state.slideBanner.banners.splice(data, 1)
    },

    setCurrentBannerIndex (state, data) {
      state.currentBannerIndex = data
    }
  },

  getters: {
    floatTextStyle: state => {
      let style = {}
      if (state.floatText.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.floatText.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (state.floatText.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(state.floatText.backgroundColor, state.floatText.backgroundOpacity)
        }
      }
      return {...style, ...{color: state.floatText.fontColor, fontSize: state.floatText.fontSize+'px'}}
    },

    slideBannerTitleStyle: state => {
      const banner  = state.slideBanner.banners[state.currentBannerIndex]
      if (banner) {
        return {color: banner.fontColor, fontSize: banner.titleFontSize + 'px' }
      }
    },
    
    slideBannerSubtitleStyle: state => {
      const banner  = state.slideBanner.banners[state.currentBannerIndex]
      if (banner) {
        return {color: banner.subtitleFontColor, fontSize: banner.subtitleFontSize + 'px' }
      }
    },

    slideBannerGuideIconStyle: state => {
      const banner = state.slideBanner.banners[state.currentBannerIndex]
      if (banner && banner.guideIconUrlRel) {
        return {
          backgroundImage: banner ? 'url(' + banner.guideIconUrlRel + ')' : '',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      }
    },

    slideBannerStyle: state => {
      const banner = state.slideBanner.banners[state.currentBannerIndex]
      let style = {}
      if (banner && banner.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + banner.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (banner && banner.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(banner.backgroundColor, banner.backgroundOpacity)
        }
      }
      return style
    },

    slideBannerTopStyle: state => {
      let style = {}
      if (state.slideBanner.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.slideBanner.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (state.slideBanner.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(state.slideBanner.backgroundColor, state.slideBanner.backgroundOpacity)
        }
      }
      return {...style, ...{color: state.slideBanner.fontColor, fontSize: state.slideBanner.fontSize+'px'}}
    },

    subtitleStyle: state => {
      let style = {}
      if (state.subtitle.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.subtitle.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (state.subtitle.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(state.subtitle.backgroundColor, state.subtitle.backgroundOpacity)
        }
      }
      return {...style, ...{color: state.subtitle.fontColor, fontSize: state.subtitle.fontSize+'px'}}
    },

    backgroundLongImgStyle: state => {
      if (state.backgroundLongImg.backgroundImgUrlRel) {
        return {
          backgroundImage: 'url(' + state.backgroundLongImg.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      }
    },

    fixedFloatWindowStyle: state => {
      if (state.fixedFloatingWindow.backgroundImgUrlRel) {
        return {
          backgroundImage: 'url(' + state.fixedFloatingWindow.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      }
    },

    fixedBannerStyle: state => {
      if (state.fixedBanner.backgroundImgUrlRel) {
        return {
          backgroundImage: 'url(' + state.fixedBanner.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      }
    },

    subregionTitleMidStyle: state => {
      let style = {}
      if (state.adAreaMid.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.adAreaMid.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (state.adAreaMid.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(state.adAreaMid.backgroundColor, state.adAreaMid.backgroundOpacity)
        }
      }
      return {...style, ...{color: state.adAreaMid.fontColor, fontSize: state.adAreaMid.fontSize+'px'}}
    },

    subregionTitleBottomStyle: state => {
      let style = {}
      if (state.adAreaBottm.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.adAreaBottm.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (state.adAreaBottm.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(state.adAreaBottm.backgroundColor, state.adAreaBottm.backgroundOpacity)
        }
      }
      return {...style, ...{color: state.adAreaBottm.fontColor, fontSize: state.adAreaBottm.fontSize+'px'}}
    },

    bannerBackgroundImgStyle: (state) => (n) => {
      const banner  = state.fiveBanners['ad'+n].banner
      let style = {}
      if (banner.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + banner.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (banner.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(banner.backgroundColor, banner.backgroundOpacity)
        }
      }
      return style
    },

    bannerGuideIconStyle: (state) => (n) => {
      if (state.fiveBanners['ad'+n].guideIconUrlRel) {
        return {
          backgroundImage: 'url(' + state.fiveBanners['ad'+n].guideIconUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      }
    },

    bannerSubtitleStyle: (state) => (n) => {
      return {
        color: state.fiveBanners['ad'+n].subtitle.fontColor,
        fontSize: state.fiveBanners['ad'+n].subtitle.fontSize + 'px'
      }
    },

    getSlideBannerTitle: (state) => {
      if (state.slideBanner.banners[state.currentBannerIndex]) {
        return state.slideBanner.banners[state.currentBannerIndex].title
      }
      return ''
    },

    getSlideBannerSubtitle: (state) => {
      if (state.slideBanner.banners[state.currentBannerIndex]) {
        return state.slideBanner.banners[state.currentBannerIndex].subtitle
      }
      return ''
    },

    bannerTitleStyle: (state) => (n) => {
      const title  = state.fiveBanners['ad'+n].title
      let style = {}
      if (title.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + title.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (title.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(title.backgroundColor, title.backgroundOpacity)
        }
      }
      return {...style, ...{color: title.fontColor, fontSize: title.fontSize+'px'}}
    },
  }
})