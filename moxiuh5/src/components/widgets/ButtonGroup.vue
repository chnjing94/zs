<template>
  <div id="button-group-wrapper">
    <div class="msg" v-show="showMsg">
      <span >配置成功，可在左侧预览区查看</span>
    </div>
    <div class="line"></div>
    <div class="buttons">
      <div class="button cancel" @click="Cancel">取消</div>
      <div class="button confirm" @click="Confirm">确定</div>
    </div>
    <div class="notification">
      <span>注：带*为必须配置项，其余配置项无配置内容不展示相关组件</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ButtonGroup',
    props: {
      editCounter: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        showMsg: false,
      }
    },
    methods: {
      Confirm () {
        this.showMsg = true
        this.$emit('buttonConfirmed')
      },
      Cancel () {
        this.showMsg = false
        this.$emit('buttonCanceled')
      }
    },
    watch: {
      editCounter () {
        this.showMsg = false
      }
    }
}
</script>

<style scoped lang="stylus">
  #button-group-wrapper
    display flex
    flex-direction column
    padding 0.5rem 1rem

  .msg
    flex 0 0 2rem
    display flex
    justify-content flex-start
    align-items center
    color rgb(51, 187, 172)
    font-weight 500 

  .line
    height 1px
    border-top 1px solid #ddd
    text-align center

  .buttons
    display flex
    align-items center
    justify-content space-between
    padding 0.5rem 0
    .button
      flex 0 0 45%
      line-height 2rem
      border solid 1px rgb(51, 187, 172)
      display flex
      align-items center
      justify-content center
      cursor pointer
    .cancel
      color rgb(0, 125, 113)
      &:hover
        background-color rgb(226, 243, 241)
    .confirm
      background-color rgb(0, 125, 113)
      color white
      &:hover
        opacity 0.8

  .notification
    display flex
    justify-content center
    align-items center
    color rgb(189, 189, 189)
    font-size 14px
</style>