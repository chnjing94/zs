<template>
  <div id="edit-area">
    <BackgroundLongImg v-show="false"/>
    <FixedFloatWindow v-show="false"/>
    <BottomState v-show="false"/>
    <SlideBanner v-show="true"/>
  </div>
</template>

<script>
import BackgroundLongImg from './edit-area/BackgroundLongImg'
import FixedFloatWindow from './edit-area/FixedFloatWindow'
import BottomState from './edit-area/BottomState'
import SlideBanner from './edit-area/SlideBanner'

export default {
  name: 'RightPanel',
  components: {
    BackgroundLongImg,
    FixedFloatWindow,
    BottomState,
    SlideBanner
  }
}
</script>

<style scoped>
  #edit-area {
    width: 21rem;
    margin-left: 10px;
    background-color: white;
    margin: 1rem
  }
</style>