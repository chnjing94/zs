<template>
  <div id="title-wrapper">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="stylus">
  #title-wrapper
    display flex
    flex-direction column
    height 3rem
    border-bottom solid 2px #ddd
    padding-left 1rem
  .title 
    flex 1 0 auto
    display flex
    align-items center
    font-size 20px
    font-weight 700
</style>