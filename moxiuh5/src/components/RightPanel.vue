<template>
  <div id="edit-area">
    <BackgroundLongImg v-show="editAreaId==='BackgroundLongImg'"/>
    <FixedFloatWindow v-show="editAreaId==='FixedFloatWindow'"/>
    <FloatText v-show="editAreaId==='FloatText'"/>
    <FloatWindow v-show="editAreaId==='FloatWindow'"/>

    <Subtitle v-show="editAreaId==='Subtitle'"/>

    <SubregionTitle :subregionId="'top'" v-show="editAreaId==='SubregionTitleTop'"/>
    <SlideBanner v-show="editAreaId==='SlideBanner'"/>
    
    <SubregionTitle :subregionId="'mid'" v-show="editAreaId==='SubregionTitleMid'"/>
    <div v-for="n in [1,2]" :key="'mid'+n">
      <BannerTitle :bannerId="'mid_'+n" v-show="editAreaId==='BannerTitleMid'+n"/>
      <BannerSubtitle :bannerId="'mid_'+n" v-show="editAreaId==='BannerSubtitleMid'+n"/>
      <GuideIcon :bannerId="'mid_'+n" v-show="editAreaId==='GuideIconMid'+n"/>
      <BannerBackgroundImg :bannerId="'mid_'+n" v-show="editAreaId==='BannerBackgroundImgMid'+n"/>
    </div>
    
    <SubregionTitle :subregionId="'bottom'" v-show="editAreaId==='SubregionTitleBottom'"/>
    <div v-for="n in [1,2,3]" :key="'bottom'+n">
      <BannerTitle :bannerId="'bottom_'+n" v-show="editAreaId==='BannerTitleBottom'+n"/>
      <BannerSubtitle :bannerId="'bottom_'+n" v-show="editAreaId==='BannerSubtitleBottom'+n"/>
      <GuideIcon :bannerId="'bottom_'+n" v-show="editAreaId==='GuideIconBottom'+n"/>
      <BannerBackgroundImg :bannerId="'bottom_'+n" v-show="editAreaId==='BannerBackgroundImgBottom'+n"/>
    </div>
    
    <FixedBanner v-show="editAreaId==='FixedBanner'"/>
    <BottomState v-show="editAreaId==='BottomState'"/>
  </div>
</template>

<script>
import BackgroundLongImg from './edit-area/BackgroundLongImg'
import FixedFloatWindow from './edit-area/FixedFloatWindow'
import BottomState from './edit-area/BottomState'
import SlideBanner from './edit-area/SlideBanner'
import Subtitle from './edit-area/Subtitle'
import FloatText from './edit-area/FloatText'
import FloatWindow from './edit-area/FloatWindow'
import SubregionTitle from './edit-area/SubregionTitle'
import BannerTitle from './edit-area/BannerTitle'
import BannerSubtitle from './edit-area/BannerSubtitle'
import GuideIcon from './edit-area/GuideIcon'
import BannerBackgroundImg from './edit-area/BannerBackgroundImg'
import FixedBanner from './edit-area/FixedBanner'
import { mapState } from 'vuex'

export default {
  name: 'RightPanel',
  components: {
    BackgroundLongImg,
    FixedFloatWindow,
    BottomState,
    SlideBanner,
    Subtitle,
    FloatText,
    FloatWindow,
    SubregionTitle,
    BannerTitle,
    BannerSubtitle,
    GuideIcon,
    BannerBackgroundImg,
    FixedBanner
  },
  computed: {
    ...mapState({
        editAreaId: state => state.editAreaId
    })
  }
}
</script>

<style scoped>
  #edit-area {
    width: 21.5rem;
    margin-left: 10px;
    background-color: white;
    margin: 0.5rem
  }
</style>