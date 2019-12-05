<template>
  <div id="edit-area">
    <BackgroundLongImg v-show="false"/>
    <FixedFloatWindow v-show="true"/>
  </div>
  
</template>

<script>
import BackgroundLongImg from './edit-area/BackgroundLongImg'
import FixedFloatWindow from './edit-area/FixedFloatWindow'

export default {
  name: 'RightPanel',
  components: {
    BackgroundLongImg,
    FixedFloatWindow
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