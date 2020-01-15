<template>
  <div id="float-text">
    <Title :title="'浮动文字'"/>
    <div class="form">
      <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required noSymbol :maxLength="16" v-model="componentName" :disable="!allowEdit"/>
      <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>
      <ImageUploader :title="'背景图片'" :preferSize="'120*40'" :fileName="backgroundImgName" :imgPrefix="'FloatText'" :required="false" @success="uploadImageSuccess" @remove="removeImg" :disable="!allowEdit"/>
      <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity" :disable="!allowEdit"/>
      <TextInput :title="'文字'" :placeholder="'请输入浮动文字'" :hint="'（限16个字以内输入）'" required noSymbol :maxLength="16" v-model="text" :disable="!allowEdit"/>
      <ErrorMsg :message="validateText" v-if="validateText&&showValidationMsg"/>
      <FontSize v-model="fontSize" :disable="!allowEdit"/>
      <FontColor v-model="fontColor" :disable="!allowEdit"/>
      <div class="show-text-toggle">
        <a-checkbox :disabled="!allowEdit" @change="onChange" :checked="show">展示文字</a-checkbox><span style="color: #868686">（取消勾选后不展示该组件）</span>
      </div>
    </div>
    <ButtonGroup v-if="allowEdit" :success="confirmed" @buttonConfirmed="confirm" @buttonCanceled="cancel" :notes="notes"/>
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
import { mapState } from 'vuex'

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
      confirmed: false,
      showValidationMsg: false,
      notes: '1.浮动文字可输入领导寄语，支持拖拽调整位置，大小。2.带*为必须配置项，其余配置项无配置内容不展示相关组件',
      
      componentName: '',
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '',
      fontSize: 0,
      fontColor: '',
      show: true,
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
      floatText: state => state.floatText,
    }),
    output () {
      const { componentName, backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor, show } = this
      return { componentName, backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor, show }
    },
    validateComponentName () {
      const error = !this.componentName ? '必填项不能为空' : ''
      return error
    },
    validateText () {
      const error = !this.text ? '必填项不能为空' : ''
      return error
    },
    validated () {
      return !this.validateText && !this.validateComponentName
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
    onChange (evt) {
      this.show = evt.target.checked
    },
    commit () {
      this.$store.commit('changeFloatText', this.output)
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
      const data = this.floatText
      this.componentName = data.componentName,
      this.backgroundImgName = data.backgroundImgName,
      this.backgroundImgUrlRel = data.backgroundImgUrlRel,
      this.backgroundColor = data.backgroundColor,
      this.backgroundOpacity = data.backgroundOpacity,
      this.text = data.text,
      this.fontSize = data.fontSize,
      this.fontColor = data.fontColor,
      this.show = data.show
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="stylus">
  #float-text
    display flex
    flex-direction column
    padding 0 15px 20px
  
  .form
    max-height 500px
    overflow-x hidden
    overflow-y auto

  .show-text-toggle
    padding 0.5rem 5px

</style>