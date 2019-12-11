<template>
  <div id="subregion-title" v-if="refresh">
    <Title :title="'分区标题'"/>
    <TextInput :title="'主标题'" :placeholder="'请输入主标题文字'" :hint="'（支持7位中文汉字和英文输入，超过展示区域手机端不展示不展示）'" noSymbol :maxLength="7" v-model="title"/>
    <ImageUploader :title="'背景图片'" :preferSize="'240*60px'" :imgPrefix="subregionId+'Title'" :required="false" @success="uploadImageSuccess"/>
    <FontColor v-model="fontColor"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'副标题'" :placeholder="'请输入副标题文字'" :hint="'（支持最多12位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'" :maxLength="12" v-model="subtitle"/>
    <FontColor v-model="subtitleFontColor"/>
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
import { mapState } from 'vuex'

export default {
  name: 'SubregionTitle',
  props:{
    subregionId: {
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
      refresh: true,
      showValidationMsg: false,
      editing: false,

      title: '',
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      fontColor: "#000000",
      fontSize: 16,
      backgroundColor: '',
      backgroundOpacity: 0,
      subtitle: '',
      subtitleFontColor: '#000000',
      subtitleFontSize: 13
    }
  },
  watch: {
    output () {
      this.editing = true
    },
    dataLoaded () {
      if (this.dataLoaded) {
        switch(this.subregionId) {
          case 'SlideBanner':
            this.reset(this.slideBanner)
            break
          case 'AdAreaMid':
            this.reset(this.adAreaMid)
            break
          case 'AdAreaBottm':
            this.reset(this.adAreaBottm)
            break
          default:
        }
        
      }
    }
  },
  computed: {
    ...mapState({
      dataLoaded: state => state.dataLoaded,
      slideBanner: state => state.slideBanner,
      adAreaMid: state => state.adAreaMid,
      adAreaBottm: state => state.adAreaBottm
    }),
    output () {
      const { title, backgroundImgUrl, backgroundImgUrlRel, fontColor, fontSize, backgroundColor, backgroundOpacity, subtitle, subtitleFontColor, subtitleFontSize } = this
      return { title, backgroundImgUrl, backgroundImgUrlRel, fontColor, fontSize, backgroundColor, backgroundOpacity, subtitle, subtitleFontColor, subtitleFontSize }
    },
  },
  methods: {
    uploadImageSuccess (res) {
      this.backgroundImgUrl = res.data.AbsPath
      this.backgroundImgUrlRel = res.data.RelativePath
      this.commit({ backgroundImgUrlRel: res.data.RelativePath })
    },
    commit (payload) {
      this.$store.commit(`change${this.subregionId}Title`, payload ? payload : this.output)
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
      this.title = data ? data.title : '',
      this.backgroundImgUrl = data ? data.backgroundImgUrl : '',
      this.backgroundImgUrlRel = data ? data.backgroundImgUrlRel : '',
      this.fontColor = data ? data.fontColor : "#000000",
      this.fontSize = data ? data.fontSize : 16,
      this.backgroundColor = data ? data.backgroundColor : '',
      this.backgroundOpacity = data ? data.backgroundOpacity : 0,
      this.subtitle = data ? data.subtitle : '',
      this.subtitleFontColor = data ? data.subtitleFontColor : '#000000',
      this.subtitleFontSize = data ? data.subtitleFontSize : 13
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
  #subregion-title
    display flex
    flex-direction column
</style>