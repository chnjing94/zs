<template>
  <div id="button-group-wrapper">
    <div class="msg" v-show="success">
      <span >配置保存成功</span>
    </div>
    <div class="line"></div>
    <div class="buttons">
      <div class="button cancel" @click="Cancel">取消</div>
      <div class="button space"></div>
      <div class="button confirm" @click="Confirm">确定</div>
    </div>
    <div class="notification">
      <span>注：{{notes}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ButtonGroup',
    props: {
      success: {
        type: Boolean,
        default: false
      },
      notes: {
        type: String,
        default: '带*为必须配置项，其余配置项无配置内容不展示相关组件'
      }
    },
    methods: {
      Confirm () {
        this.$emit('buttonConfirmed')
      },
      Cancel () {
        this.$emit('buttonCanceled')
      }
    }
}
</script>

<style scoped lang="stylus">
  #button-group-wrapper
    display flex
    flex-direction column
    width 385px
    margin 5px 0px
    padding 0 0 0 5px

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
    justify-content center
    padding 0.5rem 0
    .button
      line-height 2rem
      border solid 1px rgb(51, 187, 172)
      display flex
      align-items center
      justify-content center
      cursor pointer
    .cancel
      flex 0 0 120px
      height 40px
      color rgb(0, 125, 113)
      &:hover
        background-color rgb(226, 243, 241)
    .space
      flex 0 0 40px
      border none
    .confirm
      flex 0 0 120px
      height 40px
      background-color rgb(0, 125, 113)
      color white
      opacity 0.8
      &:hover
        opacity 1

  .notification
    display flex
    justify-content center
    align-items center
    color rgb(189, 189, 189)
    font-size 13px
</style>