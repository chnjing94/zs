<template>
  <div id="image-uploader-wrapper">
    <div class="hint">
      <div class="main-hint">
        <span style="color: red" v-if="required">*</span>{{title}}
      </div>
      <div class="sub-hint" :class="{'no-prefer-size': true}">
        （支持{{maxSize===1000000 ? '1M' : '500K'}}以内，jpg/jpeg/png/gif图片格式）
      </div>
    </div>
    <div class="image-uploader">
      <div class="text">
        <a-input-search disabled :placeholder="fileName || '点击浏览选择图片上传...'" @search="remove">
          <a-button slot="enterButton"><a-icon type="close" /></a-button>
        </a-input-search>
      </div>
      <div class="button" @click="onClick">浏览</div>
      <input v-show="false" type="file" accept="image/*" ref="imgInput" @change="onChange">
    </div>
    <div class="warning" v-if="exceedMaxFileSize" >
      <span style="color: red">图片大小超出限制</span>
    </div>
    <div class="warning" v-if="uploadFailed" >
      <span style="color: red">图片上传失败</span>
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
    maxSize: {
      type: Number,
      default: 500000
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
      uploadFailed: false,
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
      if (this.$refs.imgInput.files[0].size > this.maxSize) {
        this.exceedMaxFileSize = true
        this.$refs.imgInput.value = ''
        setTimeout(()=> {
          this.exceedMaxFileSize = false
        }, 3000)
        return
      }
      const formData = new FormData();
      formData.append('imgtype', '2')
      formData.append('filename', "pic" + (new Date() - new Date(1970,1,1)))
      formData.append('tplRelativePath', this.$store.state.resPath)
      formData.append('file', this.$refs.imgInput.files[0])
      axios
        .post('/MPageManage/Mpage/PicUpload', formData, { 'Content-Type':'multipart/form-data' })
        .then(response => {
          if(response.data !== "" && response.data.Status === "0"){
            const res = {
              fileName: this.$refs.imgInput.files[0].name,
              data: {
                RelativePath: response.data.RelativePath
              }
            }
            this.$emit('success', res)
            this.$refs.imgInput.value = ''
          }
          else{
            this.uploadFailed = true
            this.$refs.imgInput.value = ''
            setTimeout(()=> {
              this.uploadFailed = false
            }, 3000)
          }
        })
        .catch(() => {
          this.uploadFailed = true
          this.$refs.imgInput.value = ''
          setTimeout(()=> {
            this.uploadFailed = false
          }, 3000)
        })
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
    align-items center
    .main-hint
      flex 0 0 auto
      height 40px
      font-weight 600
      display flex
      align-items center
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
    height 40px

  /deep/ .ant-input-search-button
    height 40px

  .no-prefer-size
    display flex
    align-items center
</style>