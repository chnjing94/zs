<template>
  <div id="subtitle-wrapper">
    <Title :title="'副标题'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'540*60'" :fileName="backgroundImgName" :imgPrefix="'Subtitle'" :required="false" @success="uploadImageSuccess" @remove="removeImg" :disable="!allowEdit"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity" :disable="!allowEdit"/>
    <TextInput :title="'文字'" :placeholder="'请输入副标题文字'" :hint="'（限16个字以内输入）'" v-model="text" :maxLength="16" noSymbol :disable="!allowEdit"/>
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
      confirmed: false,

      backgroundImgName: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      text: '',
      fontSize: 0,
      fontColor: '',
    }
  },
  watch: {
    output () {
      this.commit()
      this.confirmed = false
    }
  },
  computed: {
    ...mapState({
      allowEdit: state => state.state,
      subtitle: state => state.subtitle,
    }),
    output () {
      const {backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor} = this
      return {backgroundImgName, backgroundImgUrlRel, backgroundColor, backgroundOpacity, text, fontSize, fontColor}
    }
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
      this.$store.commit('changeSubtitle', this.output)
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
      const data = this.subtitle
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
  #subtitle-wrapper
    display flex
    flex-direction column
    padding 0 15px 20px
</style>