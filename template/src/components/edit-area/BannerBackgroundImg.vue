<template>
  <div id="banner-background-img">
    <Title :title="'banner图背景'"/>
    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required noSymbol :maxLength="16" v-model="componentName"/>
    <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>

    <ImageUploader :title="'背景图片'" :fileName="backgroundImgName" :imgPrefix="'BannerBackgroundImg'+bannerId" :required="false" @success="uploadImageSuccess" @remove="removeImg"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" required v-model="link"/>
    <ErrorMsg :message="validteLink" v-if="validteLink&&showValidationMsg"/>

    <RedictWay v-model="way"/>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel"/>
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
import { mapState } from 'vuex'

export default {
  name: 'BannerBackgroundImg',
  props: {
    bannerId: {
      type: String,
      required: true
    }
  },
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
      
      componentName: '',
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      link: '',
      way: 0
    }
  },
  watch: {
    output () {
      this.commit()
    },
    bannerId () {
      this.load()
    }
  },
  computed: {
    ...mapState({
      fiveBanners: state => state.fiveBanners,
    }),
    output () {
      const { componentName, backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, link, way } = this
      return { 
        payload: { componentName, backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, link, way },
        n: this.bannerId
      }
    },    
    validateComponentName () {
      const error = !this.componentName ? '必填项不能为空' : ''
      return error
    },    
    validteLink () {
      let error = ''
      if (!this.link) {
        error = '必填项不能为空'
      } else if (!this.link.startsWith('http://') && !this.link.startsWith('https://')) {
        error = '请输入正确的跳转链接'
      }
      return error
    },
    validated () {
      return !this.validateComponentName && !this.validteLink
    }
  },
  methods: {
    uploadImageSuccess (res) {
      this.backgroundImgName = res.fileName
      this.backgroundImgUrlRel = res.data.RelativePath
    },
    removeImg () {
      this.backgroundImgName = ''
      this.backgroundImgUrlRel = ''
    },
    commit () {
      this.$store.commit('changeFiveBannersBackground', this.output)
    },
    confirm () {
      if (this.validated) {
        this.$store.commit('save')
        this.$store.commit('changeEditArea', '')      
      }
      this.showValidationMsg = true
    },
    cancel () {
      this.$store.commit('rollback')
      this.$store.commit('changeEditArea', '')
    },
    load () {
      const data = this.fiveBanners[this.bannerId].banner
      this.componentName = data.componentName,
      this.backgroundImgName = data.backgroundImgName,
      this.backgroundImgUrlRel = data.backgroundImgUrlRel,
      this.backgroundColor = data.backgroundColor,
      this.backgroundOpacity = data.backgroundOpacity,
      this.link = data.link,
      this.way = data.way
    },
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="stylus">
  #banner-background-img
    display flex
    flex-direction column
    padding 0 15px 20px
</style>