<template>
  <div id="edit-area">
    <BackgroundLongImg />
  </div>
  
</template>

<script>
import BackgroundLongImg from './edit-area/BackgroundLongImg'

export default {
  name: 'RightPanel',
  components: {
    BackgroundLongImg,
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