<template>
  <div id="component-name">
    <div class="hint">
      <span style="color: red">*</span>组件名称
    </div>
    <div class="test-area">
      <a-input placeholder="请输入组件名称" @change="onInputChanged" v-model="value"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
  data () {
    return {
      value: '',
    }
  },
  methods: {
    onInputChanged () {
      this.value = this.value.slice(0, 16)
      this.value = this.value.replace(/[^a-zA-Z0-9\u4E00-\u9FA5]/g,'')
      this.$emit('componentNameChanged', this.value)
    }
  }
}
</script>

<style scoped lang="stylus">
  #component-name
    display flex
    flex-direction column
    padding 0.5rem 1rem
  
  .hint
    flex 1 0 2rem
    display flex
    align-items center
    font-weight 600

  .test-area
    flex 1 0 2rem
  
</style>