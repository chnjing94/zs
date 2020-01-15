<template>
  <div id="foot-wrapper">
    <div class="button last-step" @click="cancel">上一步</div>
    <div v-if="allowEdit" class="button save" @click="save">保存</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Footer',
    methods: {
      save () {
        window.parent.document.getElementById('dataJson').value = JSON.stringify(this.$store.state.savedJson)
        window.parent.document.getElementById('dataImg').value = JSON.stringify(this.$store.getters.getImgList)
        window.parent.document.getElementById('frameSave').click()
      },
      cancel () {
        //最原始的输入的imglist
        window.parent.document.getElementById("dataImg").value = JSON.stringify(this.$store.state.orgImg);
        window.parent.document.getElementById('frameCancel').click()
      }
    },
    computed: {
      ...mapState({
        allowEdit: state => state.state,
      })
    }
}
</script>

<style scoped lang="stylus">
  #foot-wrapper
    display flex
    justify-content center

  .button
    flex 1 0 auto
    margin 0.3rem 1rem
    height 40px
    border solid 1px rgb(51, 187, 172)
    border-radius 0.3rem
    cursor pointer
  
  .last-step
    flex 0 0 120px
    display flex
    justify-content center
    align-items center
    color rgb(0, 125, 113)
    &:hover
      background-color rgb(226, 243, 241)
    
  .save
    flex 0 0 120px
    background-color rgb(0, 125, 113)
    color white
    display flex
    justify-content center
    align-items center
    opacity 0.8
    &:hover
      opacity 1
</style>