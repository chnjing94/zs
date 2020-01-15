<template>
  <div id="fixed-float-window">
    <Title :title="'固定悬浮窗'"/>

    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" v-model="componentName" :maxLength="16" required noSymbol :disable="!allowEdit"/>
    <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>

    <ImageUploader :imgPrefix="'FixedFloatWindow'" :preferSize="'160*145'" :fileName="backgroundImgName" @success="uploadImageSuccess" @remove="removeImg" :disable="!allowEdit"/>
    <ErrorMsg :message="validteBackgroundImg" v-if="validteBackgroundImg&&showValidationMsg"/>

    <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" v-model="link" required :disable="!allowEdit"/>
    <ErrorMsg :message="validteLink" v-if="validteLink&&showValidationMsg"/>

    <RedictWay v-model="way" :disable="!allowEdit"/>
    <ButtonGroup v-if="allowEdit" :success="confirmed" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
      confirmed: false,
      showValidationMsg: false,

      componentName: '',
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      link: '',
      way: null
    }
  },
  watch: {
    output () {
      this.commit()
      this.confirmed = false
    }
  },
  computed: {
    ...mapState({
      allowEdit: state => state.state,
      fixedFloatingWindow: state => state.fixedFloatingWindow,
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
      this.$store.commit('changeFixedFloatWindow', this.output)
    },
    confirm () {
      if (this.validated) {
        this.$store.commit('save')
        this.confirmed = true
      }
      this.showValidationMsg = true
    },
    cancel () {
      this.$store.commit('rollback')
      this.load()
    },
    load () {
      this.confirmed = false
      const data = this.fixedFloatingWindow
      this.componentName = data.componentName,
      this.backgroundImgName = data.backgroundImgName
      this.backgroundImgUrlRel = data.backgroundImgUrlRel,
      this.link = data.link,
      this.way = data.way
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="stylus">
  #fixed-float-window
    display flex
    flex-direction column
    padding 0 15px 20px
</style>