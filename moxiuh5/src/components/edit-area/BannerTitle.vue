<template>
  <div id="banner-title">
    <Title :title="'分区主标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入主标题文字'" :hint="'（支持12位字符、中文汉字和英文输入，超过7位不在手机端展示）'" :maxLength="12" v-model="text"/>
    <FontColor v-model="fontColor"/>
    <ImageUploader :title="'背景图片'" :fileName="backgroundImgName" :preferSize="'250*50px'" :imgPrefix="'BannerTitle'+bannerId" :required="false" @success="uploadImageSuccess" @remove="removeImg"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
      text: '',
      fontSize: 0,
      fontColor: '',
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0
    }
  },
  watch: {
    output () {
      this.commit()
    },
    bannerId () {
      this.load()
    }
  },
  computed: {
    ...mapState({
      fiveBanners: state => state.fiveBanners,
    }),
    output () {
      const { text, fontSize, fontColor, backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity } = this
      return {
        payload: { text, fontSize, fontColor, backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity },
        n: this.bannerId
      }
    },
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
    commit () {
      this.$store.commit('changeFiveBannersTitle', this.output)
    },
    confirm () {
      this.$store.commit('save')
      this.$store.commit('changeEditArea', '')     
    },
    cancel () {
      this.$store.commit('rollback')
      this.$store.commit('changeEditArea', '')
    },
    load () {
      const data = this.fiveBanners[this.bannerId].title
      this.text = data.text,
      this.fontSize = data.fontSize,
      this.fontColor = data.fontColor,
      this.backgroundImgName = data.backgroundImgName,
      this.backgroundImgUrlRel = data.backgroundImgUrlRel,
      this.backgroundColor = data.backgroundColor,
      this.backgroundOpacity = data.backgroundOpacity
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="stylus">
  #banner-title
    display flex
    flex-direction column
    padding 0 15px 20px
</style>