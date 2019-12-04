<template>
  <div id="image-uploader-wrapper">
    <div class="hint">
      <div class="main-hint">
        <span style="color: red">*</span>图片
      </div>
      <div class="sub-hint">
        <span>（支持10M以内，750*1280px尺寸jpg/jpeg/png/gif图片格式）</span>
      </div>
    </div>
    <div class="image-uploader">
      <div class="text">点击浏览图片上传...</div>
      <div class="button" @click="onClick">浏览</div>
      <input v-show="false" type="file" accept="image/*" ref="imgInput" @change="checkField">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  methods: {
    onClick () {
      this.$refs.imgInput.click()
    },
    checkField (evt) {
      window.console.log(evt.target.files[0])
    }
  }
}
</script>

<style scoped lang="stylus">
  #image-uploader-wrapper
    display flex
    flex-direction column
    height 6rem
    width 100%
    margin 1rem 0

  .hint 
    flex 1 0 auto
    display flex
    justify-content center
    align-items flex-start
    padding 0.5rem 1rem 0 1rem
    .main-hint
      flex 1 0 auto
    .sub-hint
      flex 1 1 auto
      color #868686

  .image-uploader
    flex 1 0 auto
    display flex
    height 3rem
    flex-direction row
    .text
      flex 1 1 70%
      margin 0.5rem 1rem
      border 1px solid #ddd
      color #AEADAD
      display flex
      justify-content center
      align-items center
    .button
      flex 1 1 30%
      margin 0.5rem 1rem
      border 1px solid #ddd
      color #868686
      font-weight 500 
      display flex
      justify-content center
      align-items center
      cursor pointer
      &:hover
        background-color #F1F1F1
</style>