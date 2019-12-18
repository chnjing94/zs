<template>
  <div id="fixed-banner">
    <Title :title="'固定banner图'"/>
    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required noSymbol :maxLength="16" v-model="componentName"/>
    <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>

    <ImageUploader :imgPrefix="'FixedBanner'" :fileName="backgroundImgName" :preferSize="'640*140px'" @success="uploadImageSuccess" @remove="removeImg"/>
    <ErrorMsg :message="validteBackgroundImg" v-if="validteBackgroundImg&&showValidationMsg"/>

    <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" required v-model="link"/>
    <ErrorMsg :message="validteLink" v-if="validteLink&&showValidationMsg"/>
    <RedictWay v-model="way"/>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import ImageUploader from '../form-item/ImageUploader'
import RedictWay from '../form-item/RedictWay'
import ErrorMsg from '../form-item/ErrorMsg'
import { mapState } from 'vuex'

export default {
  name: 'FixedBanner',
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
      
      componentName: '',
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      link: '',
      way: 0        
    }
  },
  watch: {
    output () {
      this.commit()
    }
  },
  computed: {
    ...mapState({
      fixedBanner: state => state.fixedBanner,
    }),
    output () {
      const { componentName, backgroundImgName, backgroundImgUrlRel, link, way } = this
      return { componentName, backgroundImgName, backgroundImgUrlRel, link, way }
    },
    validateComponentName () {
      const error = !this.componentName ? '必填项不能为空' : ''
      return error
    },
    validteBackgroundImg () {
      const error = !this.backgroundImgUrlRel ? '必填项不能为空' : ''
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
      return !this.validateComponentName && !this.validteBackgroundImg && !this.validteLink
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
      this.$store.commit('changeFixedBanner', this.output)
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
    }
  },
  created () {
    const data = this.fixedBanner
    this.componentName = data.componentName,
    this.backgroundImgName = data.backgroundImgName,
    this.backgroundImgUrlRel = data.backgroundImgUrlRel,
    this.link = data.link,
    this.way = data.way
  }
}
</script>

<style scoped lang="stylus">
  #fixed-banner
    display flex
    flex-direction column
    padding 0 15px 20px
</style>