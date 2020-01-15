<template>
  <div id="float-window">
    <Title :title="'浮动弹窗'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'300*200'" :fileName="backgroundImgName" :imgPrefix="'FloatWindow'" :required="false" @success="uploadImgSuccess" @remove="removeImg" :disable="!allowEdit"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity" :disable="!allowEdit"/>
    <TextInput :title="'文字'" :hint="'（限50个字以内输入）'" :maxLength="50" v-model="text" :disable="!allowEdit"/>
    <FontSize v-model="fontSize" :disable="!allowEdit"/>
    <FontColor v-model="fontColor" :disable="!allowEdit"/>
    <ButtonGroup v-if="allowEdit" :success="confirmed" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
import { mapState } from 'vuex'

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
      confirmed: false,
      showValidationMsg: false,
      
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '',
      fontSize: 0,
      fontColor: ''
    }
  },
  watch: {
    output () {
      this.commit()
      this.confirmed = false
    },
  },
  computed: {
    ...mapState({
      allowEdit: state => state.state,
      floatWindow: state => state.floatWindow,
    }),
    output () {
      const { backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor } = this
      return { backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor }
    },
  },
  methods: {
    uploadImgSuccess (res) {
      this.backgroundImgName = res.fileName
      this.backgroundImgUrlRel = res.data.RelativePath
    },
    removeImg () {
      this.backgroundImgName = ''
      this.backgroundImgUrlRel = ''
    },
    commit () {
      this.$store.commit('changeFloatWindow', this.output)
    },
    confirm () {
      this.$store.commit('save')
      this.confirmed = true
    },
    cancel () {
      this.$store.commit('rollback')
      this.load()
    },
    load () {
      this.confirmed = false
      const data = this.floatWindow
      this.backgroundImgName = data.backgroundImgName,
      this.backgroundImgUrlRel = data.backgroundImgUrlRel,
      this.backgroundColor = data.backgroundColor,
      this.backgroundOpacity = data.backgroundOpacity,
      this.text = data.text,
      this.fontSize = data.fontSize,
      this.fontColor = data.fontColor
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="stylus">
  #float-window
    display flex
    flex-direction column
    padding 0 15px 20px
</style>