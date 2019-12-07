<template>
  <div id="fixed-float-window">
    <Title :title="'固定悬浮窗'"/>

    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" v-model="componentName" :maxLength="16" required noSymbol/>
    <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>

    <ImageUploader :imgPrefix="'FixedFloatWindow'" :preferSize="'160*145px'" @success="uploadImageSuccess"/>
    <ErrorMsg :message="validteBackgroundImg" v-if="validteBackgroundImg&&showValidationMsg"/>

    <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" v-model="link" required/>
    <ErrorMsg :message="validteLink" v-if="validteLink&&showValidationMsg"/>

    <RedictWay v-model="way"/>
    <ButtonGroup :success="validated&&!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import ImageUploader from '../form-item/ImageUploader'
import RedictWay from '../form-item/RedictWay'
import ErrorMsg from '../form-item/ErrorMsg'

export default {
  name: 'FixedFloatWindow',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    ImageUploader,
    RedictWay,
    ErrorMsg
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,

      componentName: '',
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      link: '',
      way: 0
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { componentName, backgroundImgUrl, backgroundImgUrlRel, link, way } = this
      return { componentName, backgroundImgUrl, backgroundImgUrlRel, link, way }
    },
    validateComponentName () {
      if (!this.componentName) {
        return '必填项不能为空'
      }
      return ''
    },
    validteBackgroundImg () {
      if (!this.backgroundImgUrl || !this.backgroundImgUrlRel) {
        return '必填项不能为空'
      }
      return ''
    },
    validteLink () {
      if (!this.link) {
        return '必填项不能为空'
      } else if (!this.link.startsWith('http://') && !this.link.startsWith('https://')) {
        return '格式不正确'
      }
      return ''
    },
    validated () {
      return !this.validateComponentName && !this.validteBackgroundImg && !this.validteLink
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
  }
}
</script>

<style scoped lang="stylus">
  #fixed-float-window
    display flex
    flex-direction column
</style>