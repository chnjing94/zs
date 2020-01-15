<template>
  <div id="redirect-way">
    <div class="hint">
      <span style="color: red">*</span>站外点击唤起方式
    </div>
    <div class="select-area">
      <a-select :disabled="disable" style="width: 100%; height: 40px" v-model="wayLocal">
        <a-select-option value="0">点击唤起招商银行APP</a-select-option>
        <a-select-option value="1">点击仅跳转链接</a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RedictWay',
  model: {
    prop: 'way',
    event: 'select'
  },
  props: {
    way: Number,
    disable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      wayLocal: String(this.way)
    }
  },
  watch: {
    wayLocal (val) {
      this.$emit('select', Number(val))
    }
  }
}
</script>

<style scoped lang="stylus">
  #redirect-way
    display flex
    flex-direction column
    width 385px
    margin 5px 0px
    padding 0 0 0 5px
  
  .hint
    flex 1 0 auto
    display flex
    height 40px
    width 356px
    align-items center
    font-weight 600

  .select-area
    width 356px
    height 40px
    flex 1 0 2rem
  
  /deep/ .ant-select-selection--single
    height 40px
    display flex
    align-items center
</style>