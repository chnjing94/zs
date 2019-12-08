<template>
  <div id="edit-area">
    <BackgroundLongImg v-show="true"/>
    <FixedFloatWindow v-show="false"/>
    <BottomState v-show="false"/>
    <SlideBanner v-show="false"/>
    <Subtitle v-show="false"/>
    <FloatText v-show="false"/>
    <FloatWindow v-show="false"/>
    <SubregionTitle v-show="false"/>
    <BannerTitle v-show="false"/>
    <BannerSubtitle v-show="false"/>
    <GuideIcon v-show="false"/>
    <BannerBackgroundImg v-show="false"/>
    <FixedBanner v-show="false"/>
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