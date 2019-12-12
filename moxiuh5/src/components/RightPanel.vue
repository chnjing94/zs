<template>
  <div id="edit-area">
    <BackgroundLongImg v-show="editAreaId==='BackgroundLongImg'"/>
    <FixedFloatWindow v-show="editAreaId==='FixedFloatWindow'"/>
    <FloatText v-show="editAreaId==='FloatText'"/>
    <FloatWindow v-show="editAreaId==='FloatWindow'"/>

    <Subtitle v-show="editAreaId==='Subtitle'"/>

    <SubregionTitle :subregionId="'SlideBanner'" v-show="editAreaId==='SubregionTitleTop'"/>
    <SlideBanner v-show="editAreaId==='SlideBanner'"/>
    
    <SubregionTitle :subregionId="'AdAreaMid'" v-show="editAreaId==='SubregionTitleMid'"/>
    <div v-for="n in [1,2]" :key="'banner'+n">
      <BannerTitle :bannerId="'ad'+n" v-show="editAreaId==='BannerTitle'+n"/>
      <BannerSubtitle :bannerId="'ad'+n" v-show="editAreaId==='BannerSubtitle'+n"/>
      <GuideIcon :bannerId="'ad'+n" v-show="editAreaId==='GuideIcon'+n"/>
      <BannerBackgroundImg :bannerId="'ad'+n" v-show="editAreaId==='BannerBackgroundImg'+n"/>
    </div>
    
    <SubregionTitle :subregionId="'AdAreaBottm'" v-show="editAreaId==='SubregionTitleBottom'"/>
    <div v-for="n in [3,4,5]" :key="'banner'+n">
      <BannerTitle :bannerId="'ad'+n" v-show="editAreaId==='BannerTitle'+n"/>
      <BannerSubtitle :bannerId="'ad'+n" v-show="editAreaId==='BannerSubtitle'+n"/>
      <GuideIcon :bannerId="'ad'+n" v-show="editAreaId==='GuideIcon'+n"/>
      <BannerBackgroundImg :bannerId="'ad'+n" v-show="editAreaId==='BannerBackgroundImg'+n"/>
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
        editAreaId: state => state.editAreaId,
    })
  }
}
</script>

<style scoped>
  #edit-area {
    width: 420px;
    margin-left: 10px;
    background-color: white;
    margin: 0.5rem 0.5rem 0.5rem 18px
  }
</style>