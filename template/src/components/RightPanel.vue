<template>
  <div id="edit-area">
    <BackgroundLongImg v-if="showEditPanel('BackgroundLongImg')"/>
    <FixedFloatWindow v-if="showEditPanel('FixedFloatWindow')"/>
    <FloatText v-if="showEditPanel('FloatText')"/>
    <FloatWindow v-if="showEditPanel('FloatWindow')"/>

    <Subtitle v-if="showEditPanel('Subtitle')"/>

    <SubregionTitle :subregionId="'SlideBanner'" v-if="showEditPanel('SubregionTitleTop')"/>
    <SlideBanner v-if="showEditPanel('SlideBanner')"/>
    
    <SubregionTitle :subregionId="'AdAreaMid'" v-if="showEditPanel('SubregionTitleMid')"/>
    <div v-for="n in [1,2]" :key="'banner'+n">
      <BannerTitle :bannerId="'ad'+n" v-if="showEditPanel('BannerTitle'+n)"/>
      <BannerSubtitle :bannerId="'ad'+n" v-if="showEditPanel('BannerSubtitle'+n)"/>
      <GuideIcon :bannerId="'ad'+n" v-if="showEditPanel('GuideIcon'+n)"/>
      <BannerBackgroundImg :bannerId="'ad'+n" v-if="showEditPanel('BannerBackgroundImg'+n)"/>
    </div>
    
    <SubregionTitle :subregionId="'AdAreaBottm'" v-if="showEditPanel('SubregionTitleBottom')"/>
    <div v-for="n in [3,4,5]" :key="'banner'+n">
      <BannerTitle :bannerId="'ad'+n" v-if="showEditPanel('BannerTitle'+n)"/>
      <BannerSubtitle :bannerId="'ad'+n" v-if="showEditPanel('BannerSubtitle'+n)"/>
      <GuideIcon :bannerId="'ad'+n" v-if="showEditPanel('GuideIcon'+n)"/>
      <BannerBackgroundImg :bannerId="'ad'+n" v-if="showEditPanel('BannerBackgroundImg'+n)"/>
    </div>
    
    <FixedBanner v-if="showEditPanel('FixedBanner')"/>
    <BottomState v-if="showEditPanel('BottomState')"/>
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
        allowEdit: state => state.state,
        editAreaId: state => state.editAreaId,
    })
  },
  methods: {
    showEditPanel (editAreaId) {
      return editAreaId === this.editAreaId && this.allowEdit === true
    }
  }
}
</script>

<style scoped>
  #edit-area {
    width: 420px;
    /* margin-left: 10px; */
    background-color: white;
    position: fixed;
    top: 0.5rem;
  }
</style>