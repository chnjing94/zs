<template>
  <div id="foot-wrapper">
    <div class="button last-step">上一步</div>
    <div class="button save">保存</div>
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
    border solid 1px rgb(51, 187, 172)
    border-radius 0.3rem
    cursor pointer
    min-height 1rem
  
  .last-step
    flex 0 1 7rem
    display flex
    justify-content center
    align-items center
    color rgb(0, 125, 113)
    &:hover
      background-color rgb(226, 243, 241)
    
  .save
    flex 0 1 7rem
    background-color rgb(0, 125, 113)
    color white
    display flex
    justify-content center
    align-items center
    &:hover
      opacity 0.8
</style>