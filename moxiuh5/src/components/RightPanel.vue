<template>
  <div id="edit-area">
    <BackgroundLongImg v-show="false"/>
    <FixedFloatWindow v-show="true"/>
    <BottomState v-show="false"/>
  </div>
</template>

<script>
import BackgroundLongImg from './edit-area/BackgroundLongImg'
import FixedFloatWindow from './edit-area/FixedFloatWindow'
import BottomState from './edit-area/BottomState'

export default {
  name: 'RightPanel',
  components: {
    BackgroundLongImg,
    FixedFloatWindow,
    BottomState
  }
}
</script>

<style scoped>
  #edit-area {
    width: 400px;
    margin-left: 10px;
    background-color: white;
    margin: 1rem
  }
</style>