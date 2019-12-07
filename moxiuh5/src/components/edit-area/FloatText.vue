<template>
  <div id="float-text">
    <Title :title="'浮动文字'"/>
    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required noSymbol :maxLength="16" v-model="componentName"/>
    <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>

    <ImageUploader :title="'背景图片'" :imgPrefix="'FloatText'" :required="false" @success="uploadImageSuccess"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'文字'" :placeholder="'请输入浮动文字'" :hint="'（支持最多16位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'" required noSymbol :maxLength="16" v-model="text"/>
    <ErrorMsg :message="validateText" v-if="validateText&&showValidationMsg"/>
    <FontSize v-model="fontSize"/>
    <FontColor v-model="fontColor"/>
    <div class="show-text-toggle">
      <a-checkbox @change="onChange" :checked="show">展示文字</a-checkbox><span style="color: #868686">（取消勾选后不展示该组件）</span>
    </div>
    <ButtonGroup :success="validated&&!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" :notes="notes"/>
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import FontSize from '../form-item/FontSize'
import FontColor from '../form-item/FontColor'
import ImageUploader from '../form-item/ImageUploader'
import BackgroundColor from '../form-item/BackgroundColor'
import ErrorMsg from '../form-item/ErrorMsg'

export default {
  name: 'FloatText',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    FontSize,
    FontColor,
    ImageUploader,
    BackgroundColor,
    ErrorMsg
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,
      notes: '1.浮动文字可输入领导寄语，支持拖拽调整位置，大小。2.带*为必须配置项，其余配置项无配置内容不展示相关组件',
      
      componentName: '',
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '领导寄语',
      fontSize: 16,
      fontColor: "#000000",
      show: true,
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { componentName, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor, show } = this
      return { componentName, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor, show }
    },
    validateComponentName () {
      if (!this.componentName) {
        return '必填项不能为空'
      }
      return ''
    },
    validateText () {
      if (!this.text) {
        return '必填项不能为空'
      }
      return ''
    },
    validated () {
      return !this.validateText && !this.validateComponentName
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
    },
    onChange (e) {
      this.show = e.target.checked
    }
  }
}
</script>

<style scoped lang="stylus">
  #float-text
    display flex
    flex-direction column

  .show-text-toggle
    padding 0.5rem 1rem

</style>