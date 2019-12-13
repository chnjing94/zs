<template>
  <div id="subtitle-wrapper">
    <Title :title="'副标题'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'540*60px'" :imgPrefix="'Subtitle'" :required="false" @success="uploadImageSuccess"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'文字'" :placeholder="'请输入副标题文字'" :hint="'（支持最多16位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'" v-model="text" :maxLength="16" noSymbol/>
    <FontSize v-model="fontSize"/>
    <FontColor v-model="fontColor"/>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '',
      fontSize: 0,
      fontColor: '',
    }
  },
  watch: {
    backgroundColor () {
      this.commit({ backgroundColor: this.backgroundColor })
    },
    backgroundOpacity () {
      this.commit({ backgroundOpacity: this.backgroundOpacity })
    },
    text () {
      this.commit({ text: this.text })
    },
    fontSize () {
      this.commit({ fontSize: this.fontSize })
    },
    fontColor () {
      this.commit({ fontColor: this.fontColor })
    }
  },
  computed: {
    ...mapState({
      subtitle: state => state.subtitle,
    }),
  },
  methods: {
    uploadImageSuccess (res) {
      this.backgroundImgUrl = res.data.AbsPath
      this.backgroundImgUrlRel = res.data.RelativePath
      this.commit({ backgroundImgUrlRel: res.data.RelativePath})
    },
    commit (payload) {
      this.$store.commit('changeSubtitle', payload)
    },
    confirm () {
      this.$store.commit('save')
      this.$store.commit('changeEditArea', '')
    },
    cancel () {
      this.$store.commit('rollback')
      this.$store.commit('changeEditArea', '')
    }
  },
  created () {
    this.backgroundImgUrl = this.subtitle.backgroundImgUrl,
    this.backgroundImgUrlRel = this.subtitle.backgroundImgUrlRel,
    this.backgroundColor = this.subtitle.backgroundColor,
    this.backgroundOpacity = this.subtitle.backgroundOpacity,
    this.text = this.subtitle.text,
    this.fontSize = this.subtitle.fontSize,
    this.fontColor = this.subtitle.fontColor
  }
}
</script>

<style scoped lang="stylus">
  #subtitle-wrapper
    display flex
    flex-direction column
    padding 0 15px 20px
</style>