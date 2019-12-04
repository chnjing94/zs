<template>
  <div id="title-wrapper">
    <div class="title">背景长图</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style scoped lang="stylus">
  #title-wrapper
    display flex
    flex-direction column
    height 3rem
    border-bottom solid 2px #ddd
  .title 
    flex 1 0 auto
    margin 1rem
    align-items center
    font-size 20px
    font-weight 700
</style>