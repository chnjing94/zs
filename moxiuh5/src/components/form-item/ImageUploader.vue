<template>
  <div id="image-uploader-wrapper">
    <div class="hint">
      <div class="main-hint" :style="{alignItems: preferSize ? '' : 'center'}">
        <span style="color: red" v-if="required">*</span>{{title}}
      </div>
      <div class="sub-hint" :class="{'no-prefer-size': !preferSize}">
        （支持10M以内，<span v-if="preferSize">建议{{preferSize}}尺寸的</span>jpg/jpeg/png/gif图片格式）
      </div>
    </div>
    <div class="image-uploader">
      <div class="text">
        <a-input-search disabled :placeholder="fileName || '点击浏览图片上传...'" @search="remove" size="large">
          <a-button slot="enterButton"><a-icon type="close" /></a-button>
        </a-input-search>
      </div>
      <div class="button" @click="onClick">浏览</div>
      <input v-show="false" type="file" accept="image/*" ref="imgInput" @change="onChange">
    </div>
    <div class="warning" v-if="exceedMaxFileSize" >
      <span style="color: red">图片大小超出限制</span>
    </div>
  </div>
</template>

<script>
 import axios from 'axios'

export default {
  name: 'ImageUploader',
  props: {
    fileName: String,
    required: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "图片"
    },
    preferSize: {
      type: String,
    },
    imgPrefix: {
      type: String,
      required: true,
      default: ""
    }
  },
  data () {
    return {
      exceedMaxFileSize: false,
    }
  },
  methods: {
    remove () {
      this.$emit('remove')
    },
    onClick () {
      this.$refs.imgInput.click()
    },

    onChange () {
      if (this.$refs.imgInput.files[0].size > 10000000) {
        this.exceedMaxFileSize = true
        this.$refs.imgInput.value = ''
        setTimeout(()=> {
          this.exceedMaxFileSize = false
        }, 3000)
        return
      }
      const formData = new FormData();
      formData.append('filename', this.imgPrefix + '-' + this.uuid() + '.' + this.$refs.imgInput.files[0].type.split('/')[1])
      formData.append('pictype', '0')
      formData.append('file', this.$refs.imgInput.files[0])
      axios
        .post('/Mpage/PicUpload', formData, { 'Content-Type':'multipart/form-data' })
        .then(response => {
          this.$emit('success', Object.assign(response, {fileName: this.$refs.imgInput.files[0].name}))
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

<style lang="stylus">
  .ant-input-disabled
    background-color #ffffff
</style>
<style scoped lang="stylus">
  #image-uploader-wrapper
    display flex
    flex-direction column
    width 385px
    margin 5px 0px
    padding 0 0 0 5px
  .hint 
    flex 1 0 auto
    display flex
    width 356px
    justify-content center
    align-items flex-start
    .main-hint
      flex 0 0 auto
      height 40px
      font-weight 600
      display flex
    .sub-hint
      height 40px
      flex 1 1 auto
      color #868686
      word-break break-all

  .image-uploader
    flex 1 0 auto
    height 40px
    width 356px
    margin-top 0.5rem
    display flex
    flex-direction row
    justify-content space-between
    .text
      flex 0 0 83%
      color #AEADAD
      display flex
      justify-content center
      align-items center
      overflow hidden
    .button
      line-height 2rem
      flex 0 0 15%
      border 1px solid #ddd
      color #868686
      font-weight 500 
      display flex
      justify-content center
      align-items center
      cursor pointer
      &:hover
        background-color #F1F1F1
  .warning
    flex 1 0 auto

  /deep/ .ant-input-disabled
    background-color #FFFFFF

  .no-prefer-size
    display flex
    align-items center
</style>