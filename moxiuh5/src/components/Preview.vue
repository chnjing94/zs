<template>
  <div id="background-long-img" :style="backgroundLongImgStyle" @click="changeEditArea('BackgroundLongImg')">
    <div id="fixed-float-window" @click.stop="changeEditArea('FixedFloatWindow')" :style="fixedFloatWindowStyle"></div>
    <div id="float-text" @click.stop="changeEditArea('FloatText')" >
      <div v-if="floatText.show" :style="floatTextStyle" class="float-text-content text-content">{{floatText.text}}</div>
    </div>

    <div id="subtitle" class="text-content" @click.stop="changeEditArea('Subtitle')" :style="subtitleStyle">
      {{subtitle.text}}
    </div>

    <div id="subregion-title-top" class="text-content" @click.stop="changeEditArea('SubregionTitleTop')" :style="slideBannerTopStyle">{{slideBanner.title}}</div>
    <div id="slide-banner" @click.stop="changeEditArea('SlideBanner')" :style="slideBannerStyle" ></div>
    <div id="slide-banner-title"  @click.stop="changeEditArea('SlideBanner')" :style="slideBannerTitleStyle">{{getSlideBannerTitle}}</div>
    <div id="slide-banner-subtitle" @click.stop="changeEditArea('SlideBanner')" :style="slideBannerSubtitleStyle">{{getSlideBannerSubtitle}}</div>
    <div id="slide-banner-guide-icon" @click.stop="changeEditArea('SlideBanner')" :style="slideBannerGuideIconStyle"></div>

    <div id="subregion-title-mid" @click.stop="changeEditArea('SubregionTitleMid')">
      <div class="subregion-title text-content" :style="subregionTitleMidStyle">{{adAreaMid.title}}</div>
      <div class="subregion-sub-title text-content" :style="{color: adAreaMid.subtitleFontColor, fontSize: adAreaMid.subtitleFontSize+'px'}">{{adAreaMid.subtitle}}</div>
    </div>
    <div id="subregion-title-bottom" @click.stop="changeEditArea('SubregionTitleBottom')">
      <div class="subregion-title text-content" :style="subregionTitleBottomStyle">{{adAreaBottm.title}}</div>
      <div class="subregion-sub-title text-content" :style="{color: adAreaBottm.subtitleFontColor, fontSize: adAreaBottm.subtitleFontSize+'px'}">{{adAreaBottm.subtitle}}</div>
    </div>

    <div v-for="n in [1,2,3,4,5]" :key="'banner'+n">
      <div :id="'banner-title-'+n" class="text-content-left" @click.stop="changeEditArea('BannerTitle'+n)" :style="bannerTitleStyle(n)">{{fiveBanners['ad'+n].title.text}}</div>
      <div :id="'banner-subtitle-'+n" class="text-content-left" @click.stop="changeEditArea('BannerSubtitle'+n)" :style="bannerSubtitleStyle(n)">{{fiveBanners['ad'+n].subtitle.text}}</div>
      <div :id="'guide-icon-'+n" @click.stop="changeEditArea('GuideIcon'+n)" :style="bannerGuideIconStyle(n)"></div>
      <div :id="'banner-background-img-'+n" @click.stop="changeEditArea('BannerBackgroundImg'+n)" :style="bannerBackgroundImgStyle(n)"></div>
    </div>

    <div id="fixed-banner" @click.stop="changeEditArea('FixedBanner')" :style="fixedBannerStyle"></div>
    <div id="bottom-state" class="text-content" @click.stop="changeEditArea('BottomState')" :style="{color: footText.fontColor, fontSize: footText.fontSize+'px'}">{{footText.text}}</div>
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
    border solid 2px #007d71

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
    border dashed 1px #007d71
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

  .text-content-left
    display flex
    align-items center
    overflow hidden
    text-overflow clip
    white-space nowrap

  #fixed-float-window
    position absolute
    top 18px
    left 285px
    width 83px
    height 75px
    box-shadow 0px 0px 0px 0.1rem grey

  #subtitle
    position absolute
    top 180px
    left 53px
    width 270px
    height 30px
    box-shadow 0px 0px 0px 0.1rem grey

  #subregion-title-top
    position absolute
    top 415px
    left 128px
    width 120px
    height 30px
    box-shadow 0px 0px 0px 0.1rem grey

  #slide-banner
    position absolute
    top 453px
    left 18px
    width 339px
    height 81px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 1
  #slide-banner-title
    position absolute
    top 483px
    left 107px
    width 170px
    height 15px
    z-index 2
    display flex
    align-items center
  #slide-banner-subtitle
    position absolute
    top 500px
    left 107px
    width 170px
    height 12px
    z-index 2
    display flex
    align-items center
  #slide-banner-guide-icon
    position absolute
    top 465px
    left 283px
    width 54px
    height 54px
    z-index 2 

  #subregion-title-mid
    position absolute
    top 561px
    left 128px
    width 120px
    height 55px
    box-shadow 0px 0px 0px 0.1rem grey
    display flex
    flex-direction column
  
  .subregion-title
    flex 6 0 auto

  .subregion-sub-title
    flex 5 0 auto

  #banner-title-1
    position absolute
    top 656px
    left 43px
    width 150px
    height 19px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-subtitle-1
    position absolute
    top 678px
    left 43px
    width 75px
    height 15px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #guide-icon-1
    position absolute
    top 657px
    left 241px
    width 94px
    height 30px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-background-img-1
    position absolute
    top 633px
    left 28px
    width 319px
    height 80px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 1

  #banner-title-2
    position absolute
    top 743px
    left 43px
    width 150px
    height 19px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-subtitle-2
    position absolute
    top 765px
    left 43px
    width 75px
    height 15px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #guide-icon-2
    position absolute
    top 744px
    left 241px
    width 94px
    height 30px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-background-img-2
    position absolute
    top 720px
    left 28px
    width 319px
    height 80px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 1

  #subregion-title-bottom
    position absolute
    top 836px
    left 128px
    width 120px
    height 55px
    box-shadow 0px 0px 0px 0.1rem grey
    display flex
    flex-direction column

  #banner-title-3
    position absolute
    top 914px
    left 28px
    width 125px
    height 25px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-subtitle-3
    position absolute
    top 943px
    left 28px
    width 125px
    height 25px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #guide-icon-3
    position absolute
    top 926px
    left 244px
    width 94px
    height 30px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-background-img-3
    position absolute
    top 907px
    left 28px
    width 319px
    height 70px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 1

  #banner-title-4
    position absolute
    top 992px
    left 28px
    width 125px
    height 25px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-subtitle-4
    position absolute
    top 1021px
    left 28px
    width 125px
    height 25px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #guide-icon-4
    position absolute
    top 1004px
    left 244px
    width 94px
    height 30px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-background-img-4
    position absolute
    top 985px
    left 28px
    width 319px
    height 70px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 1

  #banner-title-5
    position absolute
    top 1070px
    left 28px
    width 125px
    height 25px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-subtitle-5
    position absolute
    top 1099px
    left 28px
    width 125px
    height 25px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #guide-icon-5
    position absolute
    top 1082px
    left 244px
    width 94px
    height 30px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 2

  #banner-background-img-5
    position absolute
    top 1063px
    left 28px
    width 319px
    height 70px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 1

  #bottom-state
    position absolute
    top 1292px
    left 1px
    width 374px
    height 35px
    box-shadow 0px 0px 0px 0.1rem grey

  #fixed-banner
    position absolute
    top 1185px
    left 28px
    width 319px
    height 70px
    box-shadow 0px 0px 0px 0.1rem grey
    z-index 1 
</style>