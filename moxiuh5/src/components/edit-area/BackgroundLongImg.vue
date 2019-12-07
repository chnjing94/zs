<template>
  <div id="background-long-img-wrapper">
    <Title :title="'背景长图'"/>
    <ImageUploader :imgPrefix="'BackgroundLongImg'" @success="uploadImageSuccess" />
    <ErrorMsg :message="validteBackgroundImg" v-if="validteBackgroundImg&&showValidationMsg"/>
    <ButtonGroup :success="validated&&!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import ImageUploader from '../form-item/ImageUploader'
import ErrorMsg from '../form-item/ErrorMsg'

export default {
  name: 'BackgroundLongImg',
  components: {
    ButtonGroup,
    ImageUploader,
    Title,
    ErrorMsg
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,
      
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
    }
  },
  methods: {
    uploadImageSuccess (res) {
        this.backgroundImgUrl = res.data.AbsPath
        this.backgroundImgUrlRel = res.data.RelativePath
    },
    confirm () {
      this.showValidationMsg = true
      this.editing = false
    },
    cancel () {
      this.showValidationMsg = false
      this.editing = false
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { backgroundImgUrl, backgroundImgUrlRel } = this
      return { backgroundImgUrl, backgroundImgUrlRel }
    },
    validteBackgroundImg () {
      if (!!this.backgroundImgUrl || !!this.backgroundImgUrlRel) {
        return '必填项不能为空'
      }
      return ''
    },
    validated () {
      return !this.validteBackgroundImg
    }
  }
}
</script>

<style scoped lang="stylus">
  #background-long-img-wrapper
    display flex
    flex-direction column
</style>