import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    savedJson: {},
    resPath: './image/',
    editAreaId: 'BackgroundLongImg',
    currentBannerIndex: 0,
    backgroundLongImg: {
      backgroundImgName: 'backlong.png',
      backgroundImgUrlRel: './image/backlong.png'
    },
    fixedFloatingWindow: {
      backgroundImgName: 'floatwindow.png',
      backgroundImgUrlRel: './image/floatwindow.png',
      componentName: "fixedfloatwindow",
      backgroundColor: "",
      link: 'http://',
      way: 0
    },
    floatText: {
      componentName: 'floatText',
      backgroundImgName: 'floattext.png',
      backgroundImgUrlRel: './image/floattext.png',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '领导寄语',
      fontSize: 16,
      fontColor: "#000000",
      show: true,
    },
    floatWindow: {
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      backgroundColor: '#FFFFFF',
      backgroundOpacity: 0,
      text: '',
      fontSize: 16,
      fontColor: '#000000'
    },
    subtitle: {
      backgroundImgName: 'subtitle.png',
      backgroundImgUrlRel: './image/subtitle.png',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '好礼送不停优质企业专享',
      fontSize: 20,
      fontColor: '#FFFFFF',
    },
    fixedBanner: {
      componentName: 'fixedBanner',
      backgroundImgName: 'pink.png',
      backgroundImgUrlRel: './image/pink.png',
      link: 'http://',
      way: 0
    },
    footText: {
      text: '基金过往业绩并不预示其未来表现市场有风险,投资需谨慎',
      fontSize: 13,
      fontColor: '#FFFFFF'
    },
    slideBanner: {
      backgroundImgUrlRel: './image/subregiontitle.png',
      title: '活动专区',
      backgroundImgName: 'subregiontitle.png',
      fontColor: '#A78D43',
      fontSize: 16,
      backgroundColor: '',
      backgroundOpacity: 0,
      subtitle: '',
      subtitleFontColor: '#000000',
      subtitleFontSize: 13,
      banners: [{
        "backgroundImgName": 'slidebanner.png',
        "backgroundImgUrlRel": './image/slidebanner.png',
        "guideIconName": "go.png",
        "guideIconUrlRel": "./image/go.png",
        "componentName": "banner1",
        "backgroundColor": "",
        "backgroundOpacity": 0,
        "guideIconUrl": "",
        "title": "参与竞猜赢取",
        "titleFontSize": 16,
        "fontColor": "#f56f13",
        "subtitle": "中奖可获得99",
        "subtitleFontSize": 14,
        "subtitleFontColor": "#fb5d05",
        "link": "https://t.cmbchina.com/zamQJn",
        "way": 0
      },
      {
        "componentName": "2",
        "backgroundImgName": "",
        "backgroundImgUrlRel": "",
        "backgroundColor": "#FDC927",
        "backgroundOpacity": 0,
        "guideIconName": "",
        "guideIconUrlRel": "",
        "title": "Banner2",
        "titleFontSize": 16,
        "fontColor": "#FF5547",
        "subtitle": "test2",
        "subtitleFontSize": 14,
        "subtitleFontColor": "#000000",
        "link": "https://t.cmbchina.com/zamQJn",
        "way": 0
      }]
    },
    adAreaMid: {
      "backgroundImgUrlRel": "./image/subregiontitle.png",
      "title": "福利票券",
      "backgroundImgName": 'subregiontitleadAreaMid.png',
      "fontColor": "#F1A553",
      "fontSize": 16,
      "backgroundColor": "#FFFFFF",
      "backgroundOpacity": 0,
      "subtitle": "你想要的我都有",
      "subtitleFontColor": "#FFFFFF",
      "subtitleFontSize": 13
    },
    adAreaBottm: {
      "backgroundImgUrlRel": './image/subregiontitle.png',
      "title": "薪享理财",
      "backgroundImgName": 'subregiontitleadAreaBottm.png',
      "fontColor": "#A78D43",
      "fontSize": 16,
      "backgroundColor": "",
      "backgroundOpacity": 0,
      "subtitle": "工资卡专享限时抢购",
      "subtitleFontColor": "#FFFFFF",
      "subtitleFontSize": 13
    },
    fiveBanners: {
      ad1: {
        banner: {
          "backgroundImgUrlRel": "./image/1.png",
          "componentName": "123",
          "backgroundImgName": "1.png",
          "backgroundColor": "",
          "backgroundOpacity": 0,
          "link": "http://",
          "way": 0
        },
        title: {
          "text": "影票、饭票免费领！",
          "fontSize": 16,
          "fontColor": "#016afe",
          "backgroundImgName": "",
          "backgroundImgUrlRel": "",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "每天10点开抢",
          "fontSize": 13,
          "fontColor": "#4D8FF3"
        },
        "guideIconName": "g1.png",
        "guideIconUrlRel": "./image/g1.png"
      },
      ad2: {
        banner: {
          "backgroundImgUrlRel": "./image/2.png",
          "backgroundImgName": "2.png",
          "componentName": "1",
          "backgroundColor": "",
          "backgroundOpacity": 0,
          "link": "http://",
          "way": 0
        },
        title: {
          "text": "资产达标、商品券马上拿！",
          "fontSize": 16,
          "fontColor": "#A78D43",
          "backgroundImgName": "",
          "backgroundImgUrlRel": "",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "每天10点开抢",
          "fontSize": 13,
          "fontColor": "#A78D43"
        },
        "guideIconUrlRel": "./image/g2.png",
        "guideIconName": "g2.png"
      },
      ad3: {
        banner: {
          "backgroundImgUrlRel": "./image/3.png",
          "backgroundImgName": "3.png",
          "componentName": "1",
          "backgroundColor": "",
          "backgroundOpacity": 0,
          "link": "http://",
          "way": 0
        },
        title: {
          "text": "聚益生金系列90天A款",
          "fontSize": 16,
          "fontColor": "#FFFFFF",
          "backgroundImgName": "",
          "backgroundImgUrlRel": "",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "0折免息 期限3个月",
          "fontSize": 13,
          "fontColor": "#FFFFFF"
        },
        "guideIconUrlRel": "./image/g3.png",
        "guideIconName": "g3.png"
      },
      ad4: {
        banner: {
          "backgroundImgUrlRel": "./image/4.png",
          "backgroundImgName": "4.png",
          "componentName": "1",
          "backgroundColor": "",
          "backgroundOpacity": 0,
          "link": "http://",
          "way": 0
        },
        title: {
          "text": "聚益生金系列90天A款",
          "fontSize": 16,
          "fontColor": "#FDC927",
          "backgroundImgName": "",
          "backgroundImgUrlRel": "",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "0折免息 期限3个月",
          "fontSize": 13,
          "fontColor": "#FFFFFF"
        },
        "guideIconUrlRel": "./image/g4.png",
        "guideIconName": "g4.png"
      },
      ad5: {
        banner: {
          "backgroundImgUrlRel": "./image/5.png",
          "backgroundImgName": "5.png",
          "componentName": "1",
          "backgroundColor": "",
          "backgroundOpacity": 0,
          "link": "http://",
          "way": 0
        },
        title: {
          "text": "聚益生金系列90天A款",
          "fontSize": 16,
          "fontColor": "#FDC927",
          "backgroundImgName": "",
          "backgroundImgUrlRel": "",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "0折免息 期限3个月",
          "fontSize": 13,
          "fontColor": "#FFFFFF"
        },
        "guideIconUrlRel": "./image/g5.png",
        "guideIconName": "g5.png"
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
    save (state) {
      state.savedJson = Object.assign({}, {
        backgroundLongImg: state.backgroundLongImg,
        fixedFloatingWindow: state.fixedFloatingWindow,
        floatText: state.floatText,
        floatWindow: state.floatWindow,
        subtitle: state.subtitle,
        fixedBanner: state.fixedBanner,
        footText: state.footText,
        slideBanner: JSON.parse(JSON.stringify(state.slideBanner)),
        adAreaMid: state.adAreaMid,
        adAreaBottm: state.adAreaBottm,
        fiveBanners: JSON.parse(JSON.stringify(state.fiveBanners)),
      })
    },
    rollback (state) {
      const { backgroundLongImg, fixedFloatingWindow, floatText, floatWindow, subtitle, fixedBanner, footText, slideBanner, adAreaMid, adAreaBottm, fiveBanners} = state.savedJson
      state.backgroundLongImg = backgroundLongImg
      state.fixedFloatingWindow = fixedFloatingWindow
      state.floatText = floatText
      state.floatWindow = floatWindow
      state.subtitle = subtitle
      state.fixedBanner = fixedBanner
      state.footText = footText
      state.slideBanner = JSON.parse(JSON.stringify(slideBanner))
      state.adAreaMid = adAreaMid
      state.adAreaBottm = adAreaBottm
      state.fiveBanners = JSON.parse(JSON.stringify(fiveBanners))
    },
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
    },

    changeResPath(state, data) {
      state.resPath = data
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
      state.slideBanner.banners = data
      // Vue.set(state.slideBanner.banners, data.n, {...state.slideBanner.banners[data.n], ...data.payload})
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
      style.boxShadow = state.editAreaId==='FloatText' ? '0px 0px 0px 1px #007d71' : ''
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
      style.boxShadow = state.editAreaId==='SlideBanner' ? '0px 0px 0px 1px #007d71' : ''
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
      style.boxShadow = state.editAreaId==='SubregionTitleTop' ? '0px 0px 0px 1px #007d71' : ''
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
      style.boxShadow = state.editAreaId==='Subtitle' ? '0px 0px 0px 1px #007d71' : ''
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
      let style = {}
      if (state.fixedFloatingWindow.backgroundImgUrlRel) {
        style =  {
          backgroundImage: 'url(' + state.fixedFloatingWindow.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }
      }
      style.boxShadow = state.editAreaId==='FixedFloatWindow' ? '0px 0px 0px 1px #007d71' : ''
      return style
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