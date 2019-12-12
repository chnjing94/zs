<template>
  <div id="float-window" v-if="refresh">
    <Title :title="'浮动弹窗'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'540*60px'" :imgPrefix="'FloatWindow'" :required="false" @success="uploadImgSuccess"/>
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
      refresh: true,
      showValidationMsg: false,
      editing: false,
      
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '',
      fontSize: 16,
      fontColor: '#000000'
    }
  },
  watch: {
    output () {
      this.editing = true
    },
    dataLoaded () {
      if (this.dataLoaded) {
        this.reset(this.floatWindow)
      }
    }
  },
  computed: {
    ...mapState({
      dataLoaded: state => state.dataLoaded,
      floatWindow: state => state.floatWindow,
    }),
    output () {
      const { backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor } = this
      return { backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor }
    },
  },
  methods: {
    uploadImgSuccess (res) {
      this.backgroundImgUrl = res.data.AbsPath
      this.backgroundImgUrlRel = res.data.RelativePath
      this.commit({ backgroundImgUrlRel: res.data.RelativePath})
    },
    commit (payload) {
      this.$store.commit('changeFloatWindow', payload ? payload : this.output)
    },
    confirm () {
      this.commit()
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
    reset (data) {
      this.backgroundImgUrl = data ? data.backgroundImgUrl : '',
      this.backgroundImgUrlRel = data ? data.backgroundImgUrlRel : '',
      this.backgroundColor = data ? data.backgroundColor : '',
      this.backgroundOpacity = data ? data.backgroundOpacity : 0,
      this.text = data ? data.text : '',
      this.fontSize = data ? data.fontSize : 16,
      this.fontColor = data ? data.fontColor : '#000000'
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
  #float-window
    display flex
    flex-direction column
    padding 0 15px 20px
</style>