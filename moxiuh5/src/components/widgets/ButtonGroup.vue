<template>
  <div id="button-group-wrapper">
    <div class="msg">
      <span>配置成功，可在左侧预览区查看</span>
    </div>
    <div class="line"></div>
    <div class="buttons">
      <div class="button cancel">取消</div>
      <div class="button confirm">确定</div>
    </div>
    <div class="notification">
      <span>注：带*为必须配置项，其余配置项无配置内容不展示相关组件</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ButtonGroup',
}
</script>

<style scoped lang="stylus">
  #button-group-wrapper
    display flex
    flex-direction column
    height 9rem
    width 100%

  .msg
    flex 0 0 3rem
    display flex
    justify-content flex-start
    align-items center
    padding-left 1rem
    color rgb(77, 201, 159)
    font-weight 500 

  .line
    margin 0 1rem
    height 1px
    border-top 1px solid #ddd
    text-align center

  .buttons
    display flex
    flex 1 0 auto
    flex-direction row
    justify-content center

  .button
    flex 0 0 8rem
    margin 1rem 1rem 0 1rem
    border solid 1px rgb(77, 201, 159)
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

  .notification
    flex 0 0 40px
    display flex
    justify-content center
    align-items center
    color #D1D1D2
    font-size 14px
</style>