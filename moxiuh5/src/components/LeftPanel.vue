<template>
  <div id="left-panel">
    <div class="float-text-preview" v-if="(editAreaId==='FloatText'||editAreaId==='FloatWindow')&&floatText.componentName" @click.stop="changeEditArea('FloatWindow')" :style="floatWindowStyle">
      <div class="close">
        <a-icon type="close-circle" />
      </div>
      <div class="title" :style="{color: floatText.fontColor}">{{floatText.text}}</div>
      <div class="text" :style="textStyle">{{floatWindow.text || '请输入文字'}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LeftPanel',
  methods: {
    changeEditArea (editAreaId) {
      window.console.log(editAreaId)
      this.$store.commit('changeEditArea', editAreaId)
    },
    hexOpacity2rgba (color, opacity) {
      let colorChange = [];
      for (var i = 1; i < 7; i += 2) {
        colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
      }
      let alph = 1 - opacity / 100
      colorChange.push(alph)
      return "rgba(" + colorChange.join(',') + ')'
    }
  },
  computed: {
    ...mapState({
        editAreaId: state => state.editAreaId,
        floatText: state => state.floatText,
        floatWindow: state => state.floatWindow,
    }),

    floatWindowStyle () {
      let style = {}
      if (this.floatWindow.backgroundImgUrlRel){
        style = {
          backgroundImage: 'url(' + this.floatWindow.backgroundImgUrlRel + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      } else if (this.floatWindow.backgroundColor){
        style = {
          backgroundColor: this.hexOpacity2rgba(this.floatWindow.backgroundColor, this.floatWindow.backgroundOpacity)
        }
      }
      return style
    },

    textStyle () {
      return {color: this.floatWindow.fontColor, fontSize: this.floatWindow.fontSize+'px'}
    }
  }
}
</script>

<style scoped lang="stylus">
  #left-panel
    position relative
  
  .select-phone
    position absolute
    right 1rem
    top 35rem

  .float-text-preview
    position absolute
    right 1rem
    top 10rem
    width 15rem
    height 11rem
    background-color white
    border solid 1px #E2E2E2
    display flex
    flex-direction column
    .close
      position absolute
      right 0.3rem
      top 0.1rem
      opacity 0.5
    .title
      flex 0 0 2rem
      display flex
      justify-content center
      align-items center
      font-size 16px
      color #007d71
    .text
      flex 0 0 8rem
      border solid 1px #007d71
      margin 0 1rem
      overflow: hidden;
      text-overflow:clip;

</style>