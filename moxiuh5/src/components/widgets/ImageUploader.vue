<template>
  <div id="image-uploader-wrapper">
    <div class="hint">
      <div class="main-hint">
        <span style="color: red">*</span>{{picTitle}}
      </div>
      <div class="sub-hint">
        <span>（支持10M以内，{{picSize}}jpg/jpeg/png/gif图片格式）</span>
      </div>
    </div>
    <div class="image-uploader">
      <div class="text">点击浏览图片上传...</div>
      <div class="button" @click="onClick">浏览</div>
      <input v-show="false" type="file" accept="image/*" ref="imgInput" @change="onChange">
    </div>
  </div>
</template>

<script>
 import axios from 'axios'

export default {
  name: 'ImageUploader',
  props: {
    picTitle: {
      type: String,
      default: "图片"
    },
    picSize: {
      type: String,
      default: ""
    },
    imgPrefix: {
      type: String,
      required: true,
      default: ""
    },
  },
  methods: {
    onClick () {
      this.$refs.imgInput.click()
    },

    onChange () {
      const formData = new FormData();
      formData.append('filename', this.imgPrefix + '-' + this.uuid() + '.' + this.$refs.imgInput.files[0].type.split('/')[1])
      formData.append('pictype', '0')
      formData.append('file', this.$refs.imgInput.files[0])
      axios
        .post('/Mpage/PicUpload_1573460781472', formData, { 'Content-Type':'multipart/form-data' })
        .then(response => {
          this.$emit('uploadImgResponse', response)
          this.$refs.imgInput.value = ''
        })
    },

    uuid() {
      let s = [];
      const hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
      s[8] = s[13] = s[18] = s[23] = "-";
  
      var uuid = s.join("");
      return uuid;
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