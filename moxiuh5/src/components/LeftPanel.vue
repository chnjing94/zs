<template>
  <div id="left-panel">
    <div class="float-text-preview" v-if="editAreaId==='FloatText' || editAreaId==='FloatWindow'" @click.stop="changeEditArea('FloatWindow')">
      <div class="close">
        <a-icon type="close-circle" />
      </div>
      <div class="title">领导寄语</div>
      <div class="text">输入文字</div>
    </div>
    <div class="select-phone">
      <a-select defaultValue="IPhoneX" style="width: 120px">
        <a-select-option value="IPhoneX">IPhoneX</a-select-option>
      </a-select>
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
      }
  },
  computed: {
    ...mapState({
        editAreaId: state => state.editAreaId
    }),
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

</style>