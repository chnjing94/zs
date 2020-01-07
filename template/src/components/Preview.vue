<template>
  <div id="background-long-img" :class="{'selected': editAreaId==='BackgroundLongImg'}"  :style="backgroundLongImgStyle" @click="changeEditArea('BackgroundLongImg')">
    <div id="fixed-float-window" @click.stop="changeEditArea('FixedFloatWindow')" :style="fixedFloatWindowStyle"></div>
    <div id="float-text" :class="{'selected': editAreaId==='FloatText'}" @click.stop="changeEditArea('FloatText')" >
      <div v-if="floatText.show" :style="floatTextStyle" class="float-text-content text-content">{{floatText.text}}</div>
    </div>

    <div id="subtitle" class="text-content" @click.stop="changeEditArea('Subtitle')" :style="subtitleStyle">
      {{subtitle.text}}
    </div>

    <div id="subregion-title-top" :class="{'selected': editAreaId==='SubregionTitleTop'}" @click.stop="changeEditArea('SubregionTitleTop')" >
      <div v-if="slideBanner.subtitle"  class="subregion-sub-title text-content" :style="{color: slideBanner.subtitleFontColor, fontSize: slideBanner.subtitleFontSize+'px'}">{{slideBanner.subtitle.slice(0, 8)}}</div>
      <div class="subregion-title text-content" :style="slideBannerTopStyle">{{slideBanner.title}}</div>
    </div>

    <!-- <div id="slide-banner" @click.stop="changeEditArea('SlideBanner')" :style="slideBannerStyle" >
      <div id="slide-banner-title" :style="slideBannerTitleStyle">{{getSlideBannerTitle}}</div>
      <div id="slide-banner-subtitle"  :style="slideBannerSubtitleStyle">{{getSlideBannerSubtitle}}</div>
      <div id="slide-banner-guide-icon" :style="slideBannerGuideIconStyle"></div>
    </div> -->
    <div id="slide-banner" :class="{'selected': editAreaId==='SlideBanner'}" @click.stop="changeEditArea('SlideBanner')">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide 
          v-for="(banner, index) in slideBanner.banners" 
          :key="index"
          :style="sliderBannerStyle(banner)">
          <div id="slide-banner-title" :style="{color: banner.fontColor, fontSize: banner.titleFontSize + 'px' }">{{banner.title}}</div>
          <div id="slide-banner-subtitle"  :style="{color: banner.subtitleFontColor, fontSize: banner.subtitleFontSize + 'px' }">{{banner.subtitle}}</div>
          <div id="slide-banner-guide-icon" :style="banner.guideIconUrlRel ? { backgroundImage: 'url('  + resPath + banner.guideIconUrlRel + ')', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', } : {}"></div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>


    <div id="subregion-title-mid" :class="{'selected': editAreaId==='SubregionTitleMid'}" @click.stop="changeEditArea('SubregionTitleMid')">
      <div v-if="adAreaMid.subtitle" class="subregion-sub-title text-content" :style="{color: adAreaMid.subtitleFontColor, fontSize: adAreaMid.subtitleFontSize+'px'}">{{adAreaMid.subtitle.slice(0, 8)}}</div>
      <div class="subregion-title text-content" :style="subregionTitleMidStyle">{{adAreaMid.title}}</div>
    </div>
    <div id="subregion-title-bottom" :class="{'selected': editAreaId==='SubregionTitleBottom'}" @click.stop="changeEditArea('SubregionTitleBottom')">
      <div v-if="adAreaBottm.subtitle" class="subregion-sub-title text-content" :style="{color: adAreaBottm.subtitleFontColor, fontSize: adAreaBottm.subtitleFontSize+'px'}">{{adAreaBottm.subtitle.slice(0, 8)}}</div>
      <div class="subregion-title text-content" :style="subregionTitleBottomStyle">{{adAreaBottm.title}}</div>
    </div>

    <div v-for="n in [1,2,3,4,5]" :key="'banner'+n">
      <div :id="'banner-title-'+n" class="banner-title" :class="{'selected': editAreaId==='BannerTitle'+n}" @click.stop="changeEditArea('BannerTitle'+n)" :style="bannerTitleStyle(n)">{{fiveBanners['ad'+n].title.text}}</div>
      <div :id="'banner-subtitle-'+n" class="banner-subtitle" :class="{'selected': editAreaId==='BannerSubtitle'+n}" @click.stop="changeEditArea('BannerSubtitle'+n)" :style="bannerSubtitleStyle(n)">{{fiveBanners['ad'+n].subtitle.text}}</div>
      <div :id="'guide-icon-'+n" :class="{'selected': editAreaId==='GuideIcon'+n}" @click.stop="changeEditArea('GuideIcon'+n)" :style="bannerGuideIconStyle(n)"></div>
      <div :id="'banner-background-img-'+n" :class="{'selected': editAreaId==='BannerBackgroundImg'+n}" @click.stop="changeEditArea('BannerBackgroundImg'+n)" :style="bannerBackgroundImgStyle(n)"></div>
    </div>

    <div id="fixed-banner" :class="{'selected': editAreaId==='FixedBanner'}" @click.stop="changeEditArea('FixedBanner')" :style="fixedBannerStyle"></div>
    <div id="bottom-state"  :class="{'selected': editAreaId==='BottomState'}" @click.stop="changeEditArea('BottomState')" :style="{color: footText.fontColor, fontSize: footText.fontSize+'px'}">{{footText.text}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Preview',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal', // 垂直切换选项
        loop: false, // 循环模式选项
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        autoplay: {
            disableOnInteraction: false,
            delay: 5000,
        },
        speed: 300,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      }
    }
  },
  methods: {
    sliderBannerStyle (banner) {
      let style = {}
      if (banner.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + this.resPath + banner.backgroundImgUrlRel + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }
      } else if (banner.backgroundColor){
        style = {
          backgroundColor: this.hexOpacity2rgba(banner.backgroundColor, banner.backgroundOpacity)
        }
      }
      style.height = '111px'
      return style
    },
    changeEditArea (editAreaId) {
      this.$store.commit('changeEditArea', editAreaId)
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    ...mapState({
      hexOpacity2rgba: state => state.hexOpacity2rgba,
      resPath: state => state.resPath,
      editAreaId: state => state.editAreaId,
      floatText: state => state.floatText,
      subtitle: state => state.subtitle,
      slideBanner: state => state.slideBanner,
      adAreaMid: state => state.adAreaMid,
      adAreaBottm: state => state.adAreaBottm,
      fiveBanners: state => state.fiveBanners,
      footText: state => state.footText,
    }),
    ...mapGetters([
      'floatTextStyle',
      'slideBannerTopStyle',
      'subtitleStyle',
      'backgroundLongImgStyle',
      'fixedFloatWindowStyle',
      'fixedBannerStyle',
      'subregionTitleMidStyle',
      'subregionTitleBottomStyle',
      'bannerBackgroundImgStyle',
      'bannerGuideIconStyle',
      'bannerSubtitleStyle',
      'bannerTitleStyle'
    ]),
  }
}
</script>

<style scoped lang="stylus">
  .selected
    box-shadow 0px 0px 0px 1px #007d71

  #background-long-img
    position relative
    width 375px
    height 1615px
    background-color white
  
  #float-text
    position absolute
    top 60px
    left 1px
    width 77px
    height 30px
    
  .float-text-content
    height 100%
    width 100%
  
  .text-content
    display flex
    align-items center
    justify-content center
    overflow hidden
    text-overflow clip
    white-space nowrap

  .banner-title
    overflow hidden

  .banner-subtitle
    display flex
    align-items center
    justify-content flex-start

  #fixed-float-window
    position absolute
    top 222px
    left 297px
    width 75px
    height 88px
    

  #subtitle
    position absolute
    top 180px
    left 53px
    width 270px
    height 30px
    

  #subregion-title-top
    position absolute
    top 399px
    left 128px
    width 120px
    height 53px
    display flex
    justify-content: space-around
    flex-direction column-reverse

  #slide-banner
    position absolute
    top 453px
    left 28px
    width 319px
    height 111px
    z-index 1
  .swiper-pagination
    position relative
    top 3px
  /deep/ .swiper-pagination-bullet-active
    background #f5da85
    opacity 1
    
  #slide-banner-title
    position relative
    top 34px
    left 79px
    width 170px
    height 16px
    z-index 2
    text-align center
  #slide-banner-subtitle
    position relative
    top 40px
    left 79px
    width 170px
    height 14px
    z-index 2
    text-align center
  #slide-banner-guide-icon
    position absolute
    top 30px
    left 250px
    width 54px
    height 54px
    z-index 2 

  #subregion-title-mid
    position absolute
    top 596px
    left 128px
    width 120px
    height 53px
    display flex
    justify-content: space-around
    flex-direction column-reverse
  
  .subregion-title
    flex 0 0 30px

  .subregion-sub-title
    flex 0 0 23px
    text-align center

  #banner-title-1
    position absolute
    top 703px
    left 44px
    width 200px
    height 25px
    z-index 2

  #banner-subtitle-1
    position absolute
    top 728px
    left 44px
    width 200px
    height 15px
    z-index 2

  #guide-icon-1
    position absolute
    top 710px
    left 242px
    width 94px
    height 30px
    z-index 2

  #banner-background-img-1
    position absolute
    top 667px
    left 29px
    width 319px
    height 111px
    z-index 1

  #banner-title-2
    position absolute
    top 822px
    left 44px
    width 200px
    height 25px
    z-index 2

  #banner-subtitle-2
    position absolute
    top 847px
    left 44px
    width 200px
    height 15px
    z-index 2

  #guide-icon-2
    position absolute
    top 829px
    left 242px
    width 94px
    height 30px
    z-index 2

  #banner-background-img-2
    position absolute
    top 786px
    left 29px
    width 319px
    height 111px
    z-index 1

  #subregion-title-bottom
    position absolute
    top 933px
    left 128px
    width 120px
    height 53px
    display flex
    justify-content: space-around
    flex-direction column-reverse

  #banner-title-3
    position absolute
    white-space nowrap
    top 1025px
    left 29px
    width 161px
    height 31px
    display flex
    align-items center
    justify-content center
    z-index 2

  #banner-subtitle-3
    position absolute
    top 1065px
    left 29px
    width 161px
    height 25px
    display flex
    justify-content center
    z-index 2

  #guide-icon-3
    position absolute
    top 1046px
    left 245px
    width 94px
    height 30px
    z-index 2

  #banner-background-img-3
    position absolute
    top 1005px
    left 29px
    width 319px
    height 111px
    z-index 1

  #banner-title-4
    position absolute
    white-space nowrap
    top 1140px
    left 29px
    width 161px
    height 31px
    display flex
    align-items center
    justify-content center
    z-index 2

  #banner-subtitle-4
    position absolute
    top 1180px
    left 29px
    width 161px
    height 25px
    display flex
    justify-content center
    z-index 2

  #guide-icon-4
    position absolute
    top 1166px
    left 245px
    width 94px
    height 30px
    z-index 2

  #banner-background-img-4
    position absolute
    top 1124px
    left 29px
    width 319px
    height 111px
    z-index 1

  #banner-title-5
    position absolute
    white-space nowrap
    top 1263px
    left 29px
    width 161px
    height 31px
    display flex
    align-items center
    justify-content center
    z-index 2

  #banner-subtitle-5
    position absolute
    top 1303px
    left 29px
    width 161px
    height 25px
    display flex
    justify-content center
    z-index 2

  #guide-icon-5
    position absolute
    top 1285px
    left 245px
    width 94px
    height 30px
    z-index 2

  #banner-background-img-5
    position absolute
    top 1243px
    left 29px
    width 319px
    height 111px
    z-index 1

  #bottom-state
    position absolute
    text-align center
    top 1543px
    left 88px
    width 200px
    height 40px

  #fixed-banner
    position absolute
    top 1408px
    left 29px
    width 319px
    height 111px
    z-index 1 
</style>