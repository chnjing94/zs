import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    state: true,
    orgImg: ["images/backlong.png","images/floatwindow.png","images/floattext.png","images/subtitle.png","images/pink.png","images/subregiontitle.png","images/slidebanner.png","images/go.png","images/subregiontitle.png","images/subregiontitle.png","images/1.png","images/g1.png","images/2.png","images/g2.png","images/3.png","images/3_1.png","images/g3.png","images/4.png","images/4_1.png","images/g4.png","images/5.png","images/5_1.png","images/g5.png"],
    savedJson: {},
    resPath: '',
    editAreaId: 'BackgroundLongImg',
    currentBannerIndex: 0,
    backgroundLongImg: {
      backgroundImgName: 'backlong.png',
      backgroundImgUrlRel: 'images/backlong.png'
    },
    fixedFloatingWindow: {
      backgroundImgName: 'floatwindow.png',
      backgroundImgUrlRel: 'images/floatwindow.png',
      componentName: "fixedfloatwindow",
      backgroundColor: "",
      link: 'http://',
      way: 0
    },
    floatText: {
      componentName: 'floatText',
      backgroundImgName: 'floattext.png',
      backgroundImgUrlRel: 'images/floattext.png',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '领导寄语',
      fontSize: 16,
      fontColor: "#FFFFFF",
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
      backgroundImgUrlRel: 'images/subtitle.png',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '好礼送不停优质企业专享',
      fontSize: 20,
      fontColor: '#FFFFFF',
    },
    fixedBanner: {
      componentName: 'fixedBanner',
      backgroundImgName: 'pink.png',
      backgroundImgUrlRel: 'images/pink.png',
      link: 'http://',
      way: 0
    },
    footText: {
      text: '基金过往业绩并不预示其未来表现市场有风险,投资需谨慎',
      fontSize: 13,
      fontColor: '#FFFFFF'
    },
    slideBanner: {
      backgroundImgUrlRel: 'images/subregiontitle.png',
      title: '活动专区',
      backgroundImgName: 'subregiontitle.png',
      fontColor: '#826219',
      fontSize: 16,
      backgroundColor: '',
      backgroundOpacity: 0,
      subtitle: '',
      subtitleFontColor: '#000000',
      subtitleFontSize: 13,
      banners: [{
        "backgroundImgName": 'slidebanner.png',
        "backgroundImgUrlRel": 'images/slidebanner.png',
        "guideIconName": "go.png",
        "guideIconUrlRel": "images/go.png",
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
      "backgroundImgUrlRel": "images/subregiontitle.png",
      "title": "福利票券",
      "backgroundImgName": 'subregiontitleadAreaMid.png',
      "fontColor": "#826219",
      "fontSize": 16,
      "backgroundColor": "#FFFFFF",
      "backgroundOpacity": 0,
      "subtitle": "你想要的我都有",
      "subtitleFontColor": "#FFFFFF",
      "subtitleFontSize": 13
    },
    adAreaBottm: {
      "backgroundImgUrlRel": 'images/subregiontitle.png',
      "title": "薪享理财",
      "backgroundImgName": 'subregiontitleadAreaBottm.png',
      "fontColor": "#826219",
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
          "backgroundImgUrlRel": "images/1.png",
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
          "fontColor": "#0748C6",
          "backgroundImgName": "",
          "backgroundImgUrlRel": "",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "每天10点开抢",
          "fontSize": 13,
          "fontColor": "#0748C6"
        },
        "guideIconName": "g1.png",
        "guideIconUrlRel": "images/g1.png"
      },
      ad2: {
        banner: {
          "backgroundImgUrlRel": "images/2.png",
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
          "fontColor": "#7f5d0f",
          "backgroundImgName": "",
          "backgroundImgUrlRel": "",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "每天10点开抢",
          "fontSize": 13,
          "fontColor": "#7f5d0f"
        },
        "guideIconUrlRel": "images/g2.png",
        "guideIconName": "g2.png"
      },
      ad3: {
        banner: {
          "backgroundImgUrlRel": "images/3.png",
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
          "fontColor": "#fbeacd",
          "backgroundImgName": "3_1.png",
          "backgroundImgUrlRel": "images/3_1.png",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "0折免息 期限3个月",
          "fontSize": 13,
          "fontColor": "#7f5d0f"
        },
        "guideIconUrlRel": "images/g3.png",
        "guideIconName": "g3.png"
      },
      ad4: {
        banner: {
          "backgroundImgUrlRel": "images/4.png",
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
          "fontColor": "#fbeacd",
          "backgroundImgName": "4_1.png",
          "backgroundImgUrlRel": "images/4_1.png",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "0折免息 期限3个月",
          "fontSize": 13,
          "fontColor": "#FFFFFF"
        },
        "guideIconUrlRel": "images/g4.png",
        "guideIconName": "g4.png"
      },
      ad5: {
        banner: {
          "backgroundImgUrlRel": "images/5.png",
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
          "fontColor": "#fbeacd",
          "backgroundImgName": "5_1.png",
          "backgroundImgUrlRel": "images/5_1.png",
          "backgroundColor": "",
          "backgroundOpacity": 0
        },
        subtitle: {
          "text": "0折免息 期限3个月",
          "fontSize": 13,
          "fontColor": "#FFFFFF"
        },
        "guideIconUrlRel": "images/g5.png",
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
    modifyStatus(state, data) {
      state.state = data
    },

    saveOrgImgList (state, data) {
      state.orgImg = data
    },

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
    },

    setCurrentBannerIndex (state, data) {
      state.currentBannerIndex = data
    }
  },

  getters: {
    getImgList: state => {
      let imgList = []
      const {backgroundLongImg, fixedFloatingWindow, floatText, floatWindow, subtitle, fixedBanner, slideBanner, adAreaMid, adAreaBottm, fiveBanners} = state.savedJson

      if (backgroundLongImg.backgroundImgUrlRel) {
        imgList.push(backgroundLongImg.backgroundImgUrlRel)
      }
      if (fixedFloatingWindow.backgroundImgUrlRel) {
        imgList.push(fixedFloatingWindow.backgroundImgUrlRel)
      }
      if (floatText.backgroundImgUrlRel) {
        imgList.push(floatText.backgroundImgUrlRel)
      }
      if (floatWindow.backgroundImgUrlRel) {
        imgList.push(floatWindow.backgroundImgUrlRel)
      }
      if (subtitle.backgroundImgUrlRel) {
        imgList.push(subtitle.backgroundImgUrlRel)
      }
      if (fixedBanner.backgroundImgUrlRel) {
        imgList.push(fixedBanner.backgroundImgUrlRel)
      }
      if (slideBanner.backgroundImgUrlRel) {
        imgList.push(slideBanner.backgroundImgUrlRel)
      }
      slideBanner.banners.forEach(banner => {
        if (banner.backgroundImgUrlRel) {
          imgList.push(banner.backgroundImgUrlRel)
        }
        if (banner.guideIconUrlRel) {
          imgList.push(banner.guideIconUrlRel)
        }
      })

      if (adAreaMid.backgroundImgUrlRel) {
        imgList.push(adAreaMid.backgroundImgUrlRel)
      }
      if (adAreaBottm.backgroundImgUrlRel) {
        imgList.push(adAreaBottm.backgroundImgUrlRel)
      }

      for(let i = 1; i <= 5; ++i) {
        const id = 'ad' + i
        const ad = fiveBanners[id]
        if (ad.banner.backgroundImgUrlRel) {
          imgList.push(ad.banner.backgroundImgUrlRel)
        }
        if (ad.title.backgroundImgUrlRel) {
          imgList.push(ad.title.backgroundImgUrlRel)
        }
        if (ad.guideIconUrlRel) {
          imgList.push(ad.guideIconUrlRel)
        }
      }

      return imgList
    },

    floatTextStyle: state => {
      let style = {}
      if (state.floatText.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.resPath + state.floatText.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }
      } else if (state.floatText.backgroundColor){
        style = {
          backgroundColor: state.hexOpacity2rgba(state.floatText.backgroundColor, state.floatText.backgroundOpacity)
        }
      }
      return {...style, ...{color: state.floatText.fontColor, fontSize: state.floatText.fontSize+'px'}}
    },

    slideBannerTopStyle: state => {
      let style = {}
      if (state.slideBanner.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.resPath + state.slideBanner.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
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
          backgroundImage: 'url(' + state.resPath + state.subtitle.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
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
          backgroundImage: 'url(' + state.resPath + state.backgroundLongImg.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }
      }
    },

    fixedFloatWindowStyle: state => {
      let style = {}
      if (state.fixedFloatingWindow.backgroundImgUrlRel) {
        style =  {
          backgroundImage: 'url(' + state.resPath + state.fixedFloatingWindow.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }
      }
      style.boxShadow = state.editAreaId==='FixedFloatWindow' ? '0px 0px 0px 1px #007d71' : ''
      return style
    },

    fixedBannerStyle: state => {
      if (state.fixedBanner.backgroundImgUrlRel) {
        return {
          backgroundImage: 'url(' + state.resPath + state.fixedBanner.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }
      }
    },

    subregionTitleMidStyle: state => {
      let style = {}
      if (state.adAreaMid.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.resPath + state.adAreaMid.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
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
          backgroundImage: 'url(' + state.resPath + state.adAreaBottm.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
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
          backgroundImage: 'url(' + state.resPath + banner.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
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
          backgroundImage: 'url(' + state.resPath + state.fiveBanners['ad'+n].guideIconUrlRel + ')',
          backgroundSize: '100% 100%',
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

    bannerTitleStyle: (state) => (n) => {
      const title  = state.fiveBanners['ad'+n].title
      let style = {}
      if (title.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + state.resPath + title.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
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