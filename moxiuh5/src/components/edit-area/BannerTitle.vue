<template>
  <div id="banner-title" v-if="refresh">
    <Title :title="'分区主标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入主标题文字'" :hint="'（支持12位字符、中文汉字和英文输入，超过7位不在手机端展示）'" :maxLength="12" v-model="text"/>
    <FontColor v-model="fontColor"/>
    <ImageUploader :title="'背景图片'" :preferSize="'250*50px'" :imgPrefix="'BannerTitle'+bannerId" :required="false" @success="uploadImageSuccess"/>
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
import { mapState } from 'vuex'

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
      refresh: true,
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
    output () {
      this.editing = true
    },
    dataLoaded () {
      if (this.dataLoaded) {
        this.reset(this.fiveBanners[this.bannerId].title)
      }
    }
  },
  computed: {
    ...mapState({
      dataLoaded: state => state.dataLoaded,
      fiveBanners: state => state.fiveBanners,
    }),
    output () {
      const { text, fontSize, fontColor, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity } = this
      return {
        payload: { text, fontSize, fontColor, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity },
        n: this.bannerId
      }
    },
  },
  methods: {
    uploadImageSuccess (res) {
      this.backgroundImgUrl = res.data.AbsPath
      this.backgroundImgUrlRel = res.data.RelativePath
      this.commit({payload : {backgroundImgUrlRel: res.data.RelativePath}, n: this.bannerId})
    },
    commit (payload) {
      this.$store.commit('changeFiveBannersTitle', payload ? payload : this.output)
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
      this.text = data ? data.text : '',
      this.fontSize = data ? data.fontSize : 16,
      this.fontColor = data ? data.fontColor : '#000000'
      this.backgroundImgUrl = data ? data.backgroundImgUrl : '',
      this.backgroundImgUrlRel = data ? data.backgroundImgUrlRel : '',
      this.backgroundColor = data ? data.backgroundColor : '',
      this.backgroundOpacity = data ? data.backgroundOpacity : 0
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
  #banner-title
    display flex
    flex-direction column
</style>