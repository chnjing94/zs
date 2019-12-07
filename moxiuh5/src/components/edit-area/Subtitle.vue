<template>
  <div id="subtitle-wrapper">
    <Title :title="'副标题'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'540*60px'" :imgPrefix="'Subtitle'" :required="false" @success="uploadImageSuccess"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'文字'" :placeholder="'请输入副标题文字'" :hint="'（支持最多16位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'" v-model="text" :maxLength="16" noSymbol/>
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
  name: 'Subtitle',
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
      text: '',
      fontSize: 24,
      fontColor: '#000000',
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor } = this
      return { backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor }
    },
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
  #subtitle-wrapper
    display flex
    flex-direction column
</style>