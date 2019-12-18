<template>
  <div id="edit-area">
    <BackgroundLongImg v-if="editAreaId==='BackgroundLongImg'"/>
    <FixedFloatWindow v-if="editAreaId==='FixedFloatWindow'"/>
    <FloatText v-if="editAreaId==='FloatText'"/>
    <FloatWindow v-if="editAreaId==='FloatWindow'"/>

    <Subtitle v-if="editAreaId==='Subtitle'"/>

    <SubregionTitle :subregionId="'SlideBanner'" v-if="editAreaId==='SubregionTitleTop'"/>
    <SlideBanner v-if="editAreaId==='SlideBanner'"/>
    
    <SubregionTitle :subregionId="'AdAreaMid'" v-if="editAreaId==='SubregionTitleMid'"/>
    <div v-for="n in [1,2]" :key="'banner'+n">
      <BannerTitle :bannerId="'ad'+n" v-if="editAreaId==='BannerTitle'+n"/>
      <BannerSubtitle :bannerId="'ad'+n" v-if="editAreaId==='BannerSubtitle'+n"/>
      <GuideIcon :bannerId="'ad'+n" v-if="editAreaId==='GuideIcon'+n"/>
      <BannerBackgroundImg :bannerId="'ad'+n" v-if="editAreaId==='BannerBackgroundImg'+n"/>
    </div>
    
    <SubregionTitle :subregionId="'AdAreaBottm'" v-if="editAreaId==='SubregionTitleBottom'"/>
    <div v-for="n in [3,4,5]" :key="'banner'+n">
      <BannerTitle :bannerId="'ad'+n" v-if="editAreaId==='BannerTitle'+n"/>
      <BannerSubtitle :bannerId="'ad'+n" v-if="editAreaId==='BannerSubtitle'+n"/>
      <GuideIcon :bannerId="'ad'+n" v-if="editAreaId==='GuideIcon'+n"/>
      <BannerBackgroundImg :bannerId="'ad'+n" v-if="editAreaId==='BannerBackgroundImg'+n"/>
    </div>
    
    <FixedBanner v-if="editAreaId==='FixedBanner'"/>
    <BottomState v-if="editAreaId==='BottomState'"/>
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
    /* margin-left: 10px; */
    background-color: white;
    margin: 0.5rem 0
  }
</style>