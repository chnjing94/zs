<template>
  <div id="background-long-img" :style="backgroundLongImgStyle" @click="changeEditArea('BackgroundLongImg')">
    <div id="fixed-float-window" @click.stop="changeEditArea('FixedFloatWindow')" :style="fixedFloatWindowStyle"></div>
    <div id="float-text" @click.stop="changeEditArea('FloatText')" >
      <div v-if="floatText.show" :style="floatTextStyle" class="float-text-content text-content">{{floatText.text}}</div>
    </div>

    <div id="subtitle" class="text-content" @click.stop="changeEditArea('Subtitle')" :style="subtitleStyle">
      {{subtitle.text}}
    </div>

    <div id="subregion-title-top" :class="{'selected': editAreaId==='SubregionTitleTop'}" @click.stop="changeEditArea('SubregionTitleTop')" >
      <div v-if="slideBanner.subtitle"  class="subregion-sub-title text-content" :style="{color: slideBanner.subtitleFontColor, fontSize: slideBanner.subtitleFontSize+'px'}">{{slideBanner.subtitle.slice(0, 8)}}</div>
      <div class="subregion-title text-content" :style="slideBannerTopStyle">{{slideBanner.title}}</div>
    </div>
    <div id="slide-banner" @click.stop="changeEditArea('SlideBanner')" :style="slideBannerStyle" ></div>
    <div id="slide-banner-title"  @click.stop="changeEditArea('SlideBanner')" :style="slideBannerTitleStyle">{{getSlideBannerTitle}}</div>
    <div id="slide-banner-subtitle" @click.stop="changeEditArea('SlideBanner')" :style="slideBannerSubtitleStyle">{{getSlideBannerSubtitle}}</div>
    <div id="slide-banner-guide-icon" @click.stop="changeEditArea('SlideBanner')" :style="slideBannerGuideIconStyle"></div>

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

export default {
  name: 'Preview',
  methods: {
    changeEditArea (editAreaId) {
      this.$store.commit('changeEditArea', editAreaId)
    }
  },
  computed: {
    ...mapState({
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
      'slideBannerTitleStyle',
      'slideBannerSubtitleStyle',
      'slideBannerGuideIconStyle',
      'slideBannerStyle',
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
      'getSlideBannerTitle',
      'getSlideBannerSubtitle',
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
    height 1328px
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
    top 18px
    left 285px
    width 83px
    height 75px
    

  #subtitle
    position absolute
    top 180px
    left 53px
    width 270px
    height 30px
    

  #subregion-title-top
    position absolute
    top 405px
    left 128px
    width 120px
    height 53px
    display flex
    flex-direction column-reverse

  #slide-banner
    position absolute
    top 463px
    left 18px
    width 339px
    height 81px
    z-index 1
  #slide-banner-title
    position absolute
    top 488px
    left 107px
    width 170px
    height 16px
    z-index 2
    text-align center
  #slide-banner-subtitle
    position absolute
    top 510px
    left 107px
    width 170px
    height 12px
    z-index 2
    text-align center
  #slide-banner-guide-icon
    position absolute
    top 475px
    left 283px
    width 54px
    height 54px
    z-index 2 

  #subregion-title-mid
    position absolute
    top 556px
    left 128px
    width 120px
    height 53px
    display flex
    flex-direction column-reverse
  
  .subregion-title
    flex 0 0 30px

  .subregion-sub-title
    flex 0 0 23px
    text-align center

  #banner-title-1
    position absolute
    top 655px
    left 44px
    width 200px
    height 25px
    z-index 2

  #banner-subtitle-1
    position absolute
    top 681px
    left 44px
    width 200px
    height 15px
    z-index 2

  #guide-icon-1
    position absolute
    top 656px
    left 242px
    width 94px
    height 30px
    
    z-index 2

  #banner-background-img-1
    position absolute
    top 632px
    left 29px
    width 319px
    height 80px
    
    z-index 1

  #banner-title-2
    position absolute
    top 743px
    left 44px
    width 200px
    height 25px
    z-index 2

  #banner-subtitle-2
    position absolute
    top 769px
    left 44px
    width 200px
    height 15px
    z-index 2

  #guide-icon-2
    position absolute
    top 744px
    left 242px
    width 94px
    height 30px
    
    z-index 2

  #banner-background-img-2
    position absolute
    top 720px
    left 29px
    width 319px
    height 80px
    
    z-index 1

  #subregion-title-bottom
    position absolute
    top 832px
    left 128px
    width 120px
    height 53px
    display flex
    flex-direction column-reverse

  #banner-title-3
    position absolute
    overflow hidden 
    top 914px
    left 29px
    width 125px
    height 25px
    z-index 2

  #banner-subtitle-3
    position absolute
    top 943px
    left 29px
    width 125px
    height 25px
    display flex
    justify-content center
    z-index 2

  #guide-icon-3
    position absolute
    top 926px
    left 245px
    width 94px
    height 30px
    
    z-index 2

  #banner-background-img-3
    position absolute
    top 907px
    left 29px
    width 319px
    height 70px
    
    z-index 1

  #banner-title-4
    position absolute
    top 992px
    left 29px
    width 125px
    height 25px
    
    z-index 2

  #banner-subtitle-4
    position absolute
    top 1021px
    left 28px
    width 125px
    height 25px
    display flex
    justify-content center
    z-index 2

  #guide-icon-4
    position absolute
    top 1004px
    left 245px
    width 94px
    height 30px
    
    z-index 2

  #banner-background-img-4
    position absolute
    top 985px
    left 29px
    width 319px
    height 70px
    
    z-index 1

  #banner-title-5
    position absolute
    top 1070px
    left 29px
    width 125px
    height 25px
    z-index 2

  #banner-subtitle-5
    position absolute
    top 1099px
    left 29px
    width 125px
    height 25px
    z-index 2
    display flex
    justify-content center

  #guide-icon-5
    position absolute
    top 1082px
    left 245px
    width 94px
    height 30px
    z-index 2

  #banner-background-img-5
    position absolute
    top 1063px
    left 29px
    width 319px
    height 70px
    z-index 1

  #bottom-state
    position absolute
    text-align center
    top 1280px
    left 88px
    width 200px
    height 40px

  #fixed-banner
    position absolute
    top 1187px
    left 29px
    width 319px
    height 70px
    z-index 1 
</style>