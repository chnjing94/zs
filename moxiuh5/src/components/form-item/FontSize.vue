<template>
  <div id="font-size">
    <div class="hint">
        <span style="font-weight:600">文字大小</span><span style="color: #868686">（PX）</span>
    </div>
    <div class="select-area">
      <a-select style="width: 100%" @change="$emit('select', Number(sizeLocal))" v-model="sizeLocal">
        <a-select-option value="10">10</a-select-option>
        <a-select-option value="11">11</a-select-option>
        <a-select-option value="12">12</a-select-option>
        <a-select-option value="13">13</a-select-option>
        <a-select-option value="14">14</a-select-option>
        <a-select-option value="16">16</a-select-option>
        <a-select-option value="20">20</a-select-option>
        <a-select-option value="24">24</a-select-option>
        <a-select-option value="28">28</a-select-option>
        <a-select-option value="32">32</a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FontSize',
  model: {
    prop: 'size',
    event: 'select'
  },
  props: {
    size: Number
  },
  data () {
    return {
      sizeLocal: this.size
    }
  }
}
</script>

<style scoped lang="stylus">
  #font-size
    display flex
    flex-direction column
    padding 0.5rem 1rem
  
  .hint
    flex 1 0 auto
    display flex
    align-items center

  .select-area
    display flex
    align-items center
    flex 1 0 2rem
  
</style>