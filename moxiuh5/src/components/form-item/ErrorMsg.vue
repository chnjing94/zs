<template>
  <div class="validation-error">
    <span style="color: red">{{message}}</span>
  </div>
</template>

<script>
export default {
    name: 'ErrorMsg',
    props: {
      message: {
        type: String,
        required: true
      }
    }
}
</script>

<style lang="stylus" scoped>
  .validation-error 
    flex 1 0 atuo
    padding 0 5px
</style>