<template>
  <div id="background-color">
    <div class="hint">
      <div class="main-hint">
        背景颜色
      </div>
      <div class="sub-hint">
        （若配置了背景图片，背景颜色和透明度不在手机端展示）
      </div>
    </div>
    <div class="color-picker">
      <div class="selected-color" :style="{backgroundColor: selectedColor, opacity:(100-opacity)/100}" v-show="selectedColor&&opacity!==100"></div>
      <div class="transparent" v-show="!selectedColor||opacity==100">
        <div class="transparent-block" 
          v-for="i of Array.from({length:40}, (v,k) => k)" 
          :key="i"
          :style="{backgroundColor: i%2==1^Math.floor((i/8)%2)==0 ? 'white': 'grey'}"
        ></div>
      </div>
      <div class="color-panel">
        <div class="color-block" v-for="(color,index) of colors" :key="index" 
        :style="{backgroundColor: color}"
        @click="setColor(color)">

        </div>
      </div>
      <div class="more-color" @click="onClick">
        更多
        <input type="color" v-show="false" ref="moreColor" @change="colorChange">
      </div>
    </div>
    <div class="opacity-bar">
      <div class="opacity-title">透明度: {{opacity}}</div>
      <div class="bar">
        <a-slider :defaultValue="0" style="width: 80%" v-model="opacity"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundColor',
  data () {
    return {
      value: '16',
      opacity: 0,
      selectedColor: '',
      colors: ['#000000', '#676767', '#FFFFFF', '#FF0000', '#FF5547', '#F1A553', '#A78D43', '#FDC927',
                '#21A775', '#0FCD9D', '#DFEFE7', '#4F5975', '#2D4D7D', '#4D8FF3', '#5BC7F7', '#6F6FEF']
    }
  },
  methods: {
    onClick () {
      this.$refs.moreColor.click()
    },
    colorChange (evt) {
      this.selectedColor = evt.target.value
    },
    setColor (color) {
      this.selectedColor = color
    }
  },
  watch: {
    selectedColor () {
      this.$emit('colorChanged', this.selectedColor)
    }
  }
}
</script>

<style scoped lang="stylus">
  #background-color
    display flex
    flex-direction column
    padding 0.5rem 1rem
  
  .hint
    flex 1 0 2rem
    display flex
    align-items flex-start
    justify-content center
    .main-hint
      flex 1 0 auto
      font-weight 600
    .sub-hint
      flex 1 1 auto
      color #868686
      word-break break-all


  .color-picker
    flex 0 0 2.7rem
    display flex
    .selected-color
      flex 0 0 30%
      margin 0.1rem 0.2rem 0.1rem 0
    .transparent
      flex 0 0 30%
      margin 0.1rem 0.2rem 0.1rem 0
      display flex
      flex-wrap: wrap;
      border solid 1px grey
      .transparent-block
        flex 0 0 12.5%
    .color-panel
      flex 0 0 60%
      display flex
      flex-wrap: wrap;
      .color-block
        flex 0 0 1.15rem
        margin 0.1rem
    .more-color
      flex 0 0 10%
      display flex
      align-items center
      justify-content center
      font-weight 400
      cursor pointer
      color rgb(0, 125, 113)

  .opacity-bar
    flex 1 0 2rem
    display flex
    .opacity-title
      flex 1 1 30%
      display flex
      justify-content flex-end
      align-items center
    .bar
      flex 1 1 70%
      display flex
      align-items center
      justify-content center
</style>