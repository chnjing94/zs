<template>
  <div id="fixed-float-window" v-if="refresh">
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
      refresh: true,
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
    output () {
      this.editing = true
    }
  },
  computed: {
    output () {
      const { componentName, backgroundImgUrl, backgroundImgUrlRel, link, way } = this
      return { componentName, backgroundImgUrl, backgroundImgUrlRel, link, way }
    },
    validateComponentName () {
      const error = !this.componentName ? '必填项不能为空' : ''
      return error
    },
    validteBackgroundImg () {
      const error = (!this.backgroundImgUrl || !this.backgroundImgUrlRel) ? '必填项不能为空' : ''
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
      this.backgroundImgUrl = res.data.AbsPath
      this.backgroundImgUrlRel = res.data.RelativePath
      this.commit({ backgroundImgUrlRel: res.data.RelativePath })
    },
    commit (payload) {
      this.$store.commit('changeFixedFloatWindow', payload ? payload : this.output)
    },
    confirm () {
      if (this.validated) {
        this.commit()
      }
      this.showValidationMsg = true
      this.editing = false
    },
    cancel () {
      this.reset()
      this.commit()
      this.rerender()
      this.showValidationMsg = false
      this.editing = false
    },
    reset () {
      this.componentName = '',
      this.backgroundImgUrl = '',
      this.backgroundImgUrlRel = '',
      this.link = '',
      this.way = 0
    },
    rerender () {
      this.refresh= false
      this.$nextTick(()=>{
        this.refresh = true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  #fixed-float-window
    display flex
    flex-direction column
</style>