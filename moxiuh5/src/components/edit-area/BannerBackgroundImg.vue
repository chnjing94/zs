<template>
  <div id="banner-background-img">
    <Title :title="'banner图背景'"/>
    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required noSymbol :maxLength="16" v-model="componentName"/>
    <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>

    <ImageUploader :title="'背景图片'" :imgPrefix="'BannerBackgroundImg'" :preferSize="'468*60px'" :required="false" @success="uploadImageSuccess"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" required v-model="link"/>
    <ErrorMsg :message="validteLink" v-if="validteLink&&showValidationMsg"/>

    <RedictWay v-model="way"/>
    <ButtonGroup :success="validated&&!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel"/>
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import ImageUploader from '../form-item/ImageUploader'
import BackgroundColor from '../form-item/BackgroundColor'
import RedictWay from '../form-item/RedictWay'
import ErrorMsg from '../form-item/ErrorMsg'

export default {
  name: 'BannerBackgroundImg',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    ImageUploader,
    RedictWay,
    BackgroundColor,
    ErrorMsg
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,
      
      componentName: '',
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
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
      const { componentName, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, link, way } = this
      return { componentName, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, link, way }
    },    
    validateComponentName () {
      if (!this.componentName) {
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
      return !this.validateComponentName && !this.validteLink
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
  #banner-background-img
    display flex
    flex-direction column
</style>