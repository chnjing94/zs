<template>
  <div id="font-color">
    <div class="hint">
      <span style="font-weight:600">文字颜色</span>
    </div>
    <div class="color-picker">
      <div class="selected-color" :style="{backgroundColor: selectedColor}"></div>
      <div class="color-panel">
        <div class="color-block" v-for="(color,index) in colors" :key="index" 
        :style="{backgroundColor: color}"
        @click="$emit('change', color)">
        </div>
      </div>
      <div class="more-color" @click="onClick">
        更多
        <input type="color" v-show="false" ref="moreColor" @change="$emit('change', $event.target.value)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FontColor',
  model: {
    prop: 'selectedColor',
    event: 'change'
  },
  props: {
    selectedColor: String
  },
  data () {
    return {
      colors: ['#000000', '#676767', '#FFFFFF', '#FF0000', '#FF5547', '#F1A553', '#A78D43', '#FDC927',
                '#21A775', '#0FCD9D', '#DFEFE7', '#4F5975', '#2D4D7D', '#4D8FF3', '#5BC7F7', '#6F6FEF']
    }
  },
  methods: {
    onClick () {
      this.$refs.moreColor.click()
    }
  }
}
</script>

<style scoped lang="stylus">
  #font-color
    display flex
    flex-direction column
    width 385px
    margin 5px 0px
    padding 0 0 0 5px
  
  .hint
    flex 1 0 auto
    display flex
    width 356px
    height 40px
    align-items center

  .color-picker
    flex 0 0 2.7rem
    display flex
    width 356px
    height 40px
    .selected-color
      flex 0 0 30%
      margin 0.1rem 0.2rem 0.1rem 0
      border solid 1px #dbe3e8
    .color-panel
      flex 0 0 60%
      display flex
      flex-wrap: wrap
      .color-block
        flex 0 0 22px
        margin 0.1rem
        cursor pointer
        &:hover
          box-shadow 0px 0px 0px 0.1rem #007d71
    .more-color
      flex 0 0 10%
      display flex
      align-items center
      justify-content center
      font-weight 400
      cursor pointer
      color rgb(0, 125, 113)
</style>