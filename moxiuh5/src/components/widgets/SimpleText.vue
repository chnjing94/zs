<template>
  <div id="simple-text">
    <div class="hint">
      <div class="main-hint">
        文字
      </div>
      <div class="sub-hint">
        <span style="color: #868686">（支持16位中文汉字和英文输入，超过展示区域文字的内容不在手机端展示）</span>
      </div>
    </div>
    <div class="test-area">
      <a-input placeholder="请输入浮动文字" @change="onInputChanged" v-model="value"/>
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
      this.value = this.value.slice(0, 20)
      this.$emit('TextChanged', this.value)
    }
  }
}
</script>

<style scoped lang="stylus">
  #simple-text
    display flex
    flex-direction column
    padding 1rem
  
  .hint
    flex 1 0 2rem
    display flex
    align-items center
    align-items flex-start
    .main-hint
      flex 1 0 auto
      font-weight 600
    .sub-hint
      flex 1 1 auto

  .test-area
    flex 1 0 2rem
  
</style>