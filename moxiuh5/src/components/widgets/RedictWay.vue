<template>
  <div id="redirect-way">
    <div class="hint">
      <span style="color: red">*</span>站外点击唤起方式
    </div>
    <div class="select-area">
      <a-select defaultValue="0" style="width: 100%" @change="handleChange" v-model="value">
        <a-select-option value="0">点击唤起招商银行APP</a-select-option>
        <a-select-option value="1">点击仅跳转链接</a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RedictWay',
  data () {
    return {
      value: '0',
    }
  },
  methods: {
    handleChange () {

    }
  }
}
</script>

<style scoped lang="stylus">
  #redirect-way
    display flex
    flex-direction column
    padding 0.5rem 1rem
  
  .hint
    flex 1 0 2rem
    display flex
    align-items center
    font-weight 600

  .select-area
    flex 1 0 2rem
  
</style>