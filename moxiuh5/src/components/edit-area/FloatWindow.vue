<template>
  <div id="float-window">
    <Title :title="'浮动弹窗'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'540*60px'" :imgPrefix="'Subtitle'" :required="false" @success="uploadImgSuccess"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'文字'" :hint="'（支持最多50位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'" :maxLength="50" v-model="text"/>
    <FontSize v-model="fontSize"/>
    <FontColor v-model="fontColor"/>
    <ButtonGroup :success="!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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

export default {
  name: 'FloatWindow',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    FontSize,
    FontColor,
    ImageUploader,
    BackgroundColor
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,
      
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      title: '',
      text: '',
      fontSize: 16,
      fontColor: '#000000'
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, title, text, fontSize, fontColor } = this
      return { backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, title, text, fontSize, fontColor }
    },
  },
  methods: {
    uploadImgSuccess (res) {
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
  #float-window
    display flex
    flex-direction column
</style>