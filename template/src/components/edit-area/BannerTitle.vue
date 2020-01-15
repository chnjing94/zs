<template>
  <div id="banner-title">
    <Title :title="'分区主标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入主标题文字'" :hint="'（限12个字以内输入）'" :maxLength="12" v-model="text" :disable="!allowEdit"/>
    <FontColor v-model="fontColor" :disable="!allowEdit"/>
    <ImageUploader :title="'背景图片'" :preferSize="'250*50'" :fileName="backgroundImgName" :imgPrefix="'BannerTitle'+bannerId" :required="false" @success="uploadImageSuccess" @remove="removeImg" :disable="!allowEdit"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity" :disable="!allowEdit"/>
    <ButtonGroup v-if="allowEdit" :success="confirmed" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
      confirmed: false,

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
      this.confirmed = false
    },
    bannerId () {
      this.load()
    }
  },
  computed: {
    ...mapState({
      allowEdit: state => state.state,
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
      this.confirmed = true
    },
    cancel () {
      this.$store.commit('rollback')
      this.load()
    },
    load () {
      this.confirmed = false
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