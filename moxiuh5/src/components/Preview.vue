<template>
  <div id="background-long-img" :style="backgroundLongImgStyle" @click="changeEditArea('BackgroundLongImg')">
    <div id="fixed-float-window" @click.stop="changeEditArea('FixedFloatWindow')" :style="fixedFloatWindowStyle"></div>
    <div id="float-text" @click.stop="changeEditArea('FloatText')" :style="floatTextStyle"></div>

    <div id="subtitle" @click.stop="changeEditArea('Subtitle')"></div>

    <div id="subregion-title-top" @click.stop="changeEditArea('SubregionTitleTop')"></div>
    <div id="slide-banner" @click.stop="changeEditArea('SlideBanner')"></div>

    <div id="subregion-title-mid" @click.stop="changeEditArea('SubregionTitleMid')"></div>
    <div v-for="n in [1,2]" :key="'mid'+n">
      <div :id="'banner-title-mid'+n" @click.stop="changeEditArea('BannerTitleMid'+n)"></div>
      <div :id="'banner-subtitle-mid'+n" @click.stop="changeEditArea('BannerSubtitleMid'+n)"></div>
      <div :id="'guide-icon-mid'+n" @click.stop="changeEditArea('GuideIconMid'+n)"></div>
      <div :id="'banner-background-img-mid'+n" @click.stop="changeEditArea('BannerBackgroundImgMid'+n)"></div>
    </div>

    <div id="subregion-title-bottom" @click.stop="changeEditArea('SubregionTitleBottom')"></div>
    <div v-for="n in [1,2,3]" :key="'bottom'+n">
      <div :id="'banner-title-bottom'+n" @click.stop="changeEditArea('BannerTitleBottom'+n)"></div>
      <div :id="'banner-subtitle-bottom'+n" @click.stop="changeEditArea('BannerSubtitleBottom'+n)"></div>
      <div :id="'guide-icon-bottom'+n" @click.stop="changeEditArea('GuideIconBottom'+n)"></div>
      <div :id="'banner-background-img-bottom'+n" @click.stop="changeEditArea('BannerBackgroundImgBottom'+n)"></div>
    </div>

    <div id="fixed-banner" @click.stop="changeEditArea('FixedBanner')"></div>
    <div id="bottom-state" @click.stop="changeEditArea('BottomState')"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Preview',
  data () {
    return {
    }
  },
  methods: {
      changeEditArea (editAreaId) {
        window.console.log(editAreaId)
        this.$store.commit('changeEditArea', editAreaId)
      }
  },
  computed: {
    ...mapState({
        backgroundLongImg: state => state.backgroundLongImg,
        fixedFloatingWindow: state => state.fixedFloatingWindow,
        floatText: state => state.floatText,
        editAreaId: state => state.editAreaId
    }),

    backgroundLongImgStyle () {
      return {
        backgroundImage: 'url(' + this.backgroundLongImg.backgroundImgUrlRel + ')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }
    },

    fixedFloatWindowStyle () {
      return {
        backgroundImage: 'url(' + this.fixedFloatingWindow.backgroundImgUrlRel + ')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }
    },

    floatTextStyle () {
      return {
        backgroundImage: 'url(' + this.floatText.backgroundImgUrlRel + ')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }
    }
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
    left 0
    width 77px
    height 30px
    border solid 2px grey

  #fixed-float-window
    position absolute
    top 18px
    left 285px
    width 83px
    height 75px
    border solid 2px grey

  #subtitle
    position absolute
    top 180px
    left 53px
    width 270px
    height 30px
    border solid 2px grey  

  #subregion-title-top
    position absolute
    top 415px
    left 128px
    width 120px
    height 30px
    border solid 2px grey

  #slide-banner
    position absolute
    top 453px
    left 18px
    width 339px
    height 81px
    border solid 2px grey

  #subregion-title-mid
    position absolute
    top 561px
    left 128px
    width 120px
    height 50px
    border solid 2px grey
  
  #banner-title-mid1
    position absolute
    top 656px
    left 43px
    width 150px
    height 19px
    border solid 2px grey
    z-index 2

  #banner-subtitle-mid1
    position absolute
    top 678px
    left 43px
    width 75px
    height 15px
    border solid 2px grey
    z-index 2

  #guide-icon-mid1
    position absolute
    top 657px
    left 241px
    width 94px
    height 30px
    border solid 2px grey
    z-index 2

  #banner-background-img-mid1
    position absolute
    top 633px
    left 28px
    width 319px
    height 80px
    border solid 2px grey
    z-index 1

  #banner-title-mid2
    position absolute
    top 743px
    left 43px
    width 150px
    height 19px
    border solid 2px grey
    z-index 2

  #banner-subtitle-mid2
    position absolute
    top 765px
    left 43px
    width 75px
    height 15px
    border solid 2px grey
    z-index 2

  #guide-icon-mid2
    position absolute
    top 744px
    left 241px
    width 94px
    height 30px
    border solid 2px grey
    z-index 2

  #banner-background-img-mid2
    position absolute
    top 720px
    left 28px
    width 319px
    height 80px
    border solid 2px grey
    z-index 1

  #subregion-title-bottom
    position absolute
    top 836px
    left 128px
    width 120px
    height 50px
    border solid 2px grey

  #banner-title-bottom1
    position absolute
    top 914px
    left 28px
    width 125px
    height 25px
    border solid 2px grey
    z-index 2

  #banner-subtitle-bottom1
    position absolute
    top 943px
    left 28px
    width 125px
    height 25px
    border solid 2px grey
    z-index 2

  #guide-icon-bottom1
    position absolute
    top 926px
    left 244px
    width 94px
    height 30px
    border solid 2px grey
    z-index 2

  #banner-background-img-bottom1
    position absolute
    top 907px
    left 28px
    width 319px
    height 70px
    border solid 2px grey
    z-index 1

  #banner-title-bottom2
    position absolute
    top 992px
    left 28px
    width 125px
    height 25px
    border solid 2px grey
    z-index 2

  #banner-subtitle-bottom2
    position absolute
    top 1021px
    left 28px
    width 125px
    height 25px
    border solid 2px grey
    z-index 2

  #guide-icon-bottom2
    position absolute
    top 1004px
    left 244px
    width 94px
    height 30px
    border solid 2px grey
    z-index 2

  #banner-background-img-bottom2
    position absolute
    top 985px
    left 28px
    width 319px
    height 70px
    border solid 2px grey
    z-index 1

  #banner-title-bottom3
    position absolute
    top 1070px
    left 28px
    width 125px
    height 25px
    border solid 2px grey
    z-index 2

  #banner-subtitle-bottom3
    position absolute
    top 1099px
    left 28px
    width 125px
    height 25px
    border solid 2px grey
    z-index 2

  #guide-icon-bottom3
    position absolute
    top 1082px
    left 244px
    width 94px
    height 30px
    border solid 2px grey
    z-index 2

  #banner-background-img-bottom3
    position absolute
    top 1063px
    left 28px
    width 319px
    height 70px
    border solid 2px grey
    z-index 1

  #bottom-state
    position absolute
    top 1293px
    left 0
    width 375px
    height 35px
    border solid 2px grey

  #fixed-banner
    position absolute
    top 1185px
    left 28px
    width 319px
    height 70px
    border solid 2px grey
    z-index 1 
</style>