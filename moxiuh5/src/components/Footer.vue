<template>
  <div id="foot-wrapper">
    <div class="button last-step"></div>
    <div class="button save"></div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped lang="stylus">
  #foot-wrapper
    display flex
    justify-content center
    height 100%

  .button
    flex 1 0 auto
    margin 0.3rem 1rem
  
  .last-step
    flex 0 1 8rem
    background-color red
    
  .save
    flex 0 1 8rem
    background-color blue
</style>