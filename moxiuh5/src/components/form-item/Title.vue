<template>
  <div id="title-wrapper">
    <div class="title">{{title}}</div>
    <div class="subtitle" v-if="subtitle">{{subtitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  }
}
</script>

<style scoped lang="stylus">
  #title-wrapper
    display flex
    flex-direction column
    border-bottom solid 2px #ddd
    padding 0.5rem 1rem
  .title 
    flex 1 0 auto
    display flex
    align-items center
    font-size 20px
    font-weight 700
  .subtitle
    flex 1 0 auto
    display flex
    align-items center

</style>