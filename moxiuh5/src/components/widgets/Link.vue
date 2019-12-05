<template>
  <div id="link">
    <div class="hint">
      <span style="color: red">*</span><span style="font-weight:600">跳转链接</span><span style="color: #868686">（必须以一些http://或https://开始）</span>
    </div>
    <div class="test-area">
      <a-input placeholder="请输入跳转链接" @change="onInputChanged" v-model="value"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Link',
  data () {
    return {
      value: '',
    }
  },
  methods: {
    onInputChanged () {
      this.$emit('linkChanged', this.value)
    }
  }
}
</script>

<style scoped lang="stylus">
  #link
    display flex
    flex-direction column
    padding 0.5rem 1rem
  
  .hint
    flex 1 0 2rem
    display flex
    align-items center

  .test-area
    flex 1 0 2rem
  
</style>