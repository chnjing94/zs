<template>
  <div id="banner-title">
    <Title :title="'分区主标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入主标题文字'" :hint="'（支持12位字符、中文汉字和英文输入，超过7位不在手机端展示）'" :maxLength="12" v-model="text"/>
    <FontColor v-model="fontColor"/>
    <ImageUploader :title="'背景图片'" :preferSize="'250*50px'" :imgPrefix="'Subtitle'" :required="false" @success="uploadImageSuccess"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <ButtonGroup :success="!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import FontColor from '../form-item/FontColor'
import ImageUploader from '../form-item/ImageUploader'
import BackgroundColor from '../form-item/BackgroundColor'

export default {
  name: 'BannerTitle',
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
    FontColor,
    ImageUploader,
    BackgroundColor
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,
      
      text: '',
      fontSize: 16,
      fontColor: '#000000',
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { text, fontSize, fontColor, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity } = this
      return { text, fontSize, fontColor, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity }
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
  #banner-title
    display flex
    flex-direction column
</style>