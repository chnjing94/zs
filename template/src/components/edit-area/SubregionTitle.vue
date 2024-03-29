<template>
  <div id="subregion-title">
    <Title :title="'分区标题'"/>
    <div class="form">
      <TextInput :title="'主标题'" :placeholder="'请输入主标题文字'" :hint="'（限7个字以内输入）'" noSymbol :maxLength="7" v-model="title" :disable="!allowEdit"/>
      <ImageUploader :title="'背景图片'" :preferSize="'240*60'" :fileName="backgroundImgName" :imgPrefix="subregionId+'Title'" :required="false" @success="uploadImageSuccess" @remove="removeImg" :disable="!allowEdit"/>
      <FontColor v-model="fontColor" :disable="!allowEdit"/>
      <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity" :disable="!allowEdit"/>
      <TextInput :title="'副标题'" :placeholder="'请输入副标题文字'" :hint="'（限12个字以内输入）'" :maxLength="12" v-model="subtitle" :disable="!allowEdit"/>
      <FontColor v-model="subtitleFontColor" :disable="!allowEdit"/>
    </div>
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
      confirmed: false,

      title: '',
      backgroundImgName: '',
      backgroundImgUrlRel: '',
      fontColor: '',
      fontSize: 0,
      backgroundColor: '',
      backgroundOpacity: 0,
      subtitle: '',
      subtitleFontColor: '',
      subtitleFontSize: 0
    }
  },
  watch: {
    output () {
      this.commit()
      this.confirmed = false
    },
    subregionId () {
      this.load()
    }
  },
  computed: {
    ...mapState({
      allowEdit: state => state.state
    }),
    output () {
      const { title, backgroundImgName, backgroundImgUrlRel, fontColor, fontSize, backgroundColor, backgroundOpacity, subtitle, subtitleFontColor, subtitleFontSize } = this
      return { title, backgroundImgName, backgroundImgUrlRel, fontColor, fontSize, backgroundColor, backgroundOpacity, subtitle, subtitleFontColor, subtitleFontSize }
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
      this.$store.commit(`change${this.subregionId}Title`, this.output)
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
      const id = this.subregionId.substr(0,1).toLowerCase() + this.subregionId.substr(1,this.subregionId.length-1)
      let data = this.$store.state[id]

      this.title = data.title,
      this.backgroundImgName = data.backgroundImgName,
      this.backgroundImgUrlRel = data.backgroundImgUrlRel,
      this.fontColor = data.fontColor,
      this.fontSize = data.fontSize,
      this.backgroundColor = data.backgroundColor,
      this.backgroundOpacity = data.backgroundOpacity,
      this.subtitle = data.subtitle,
      this.subtitleFontColor = data.subtitleFontColor,
      this.subtitleFontSize = data.subtitleFontSize
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="stylus">
  #subregion-title
    display flex
    flex-direction column
    padding 0 15px 20px

  .form
    max-height 500px
    overflow-x hidden
    overflow-y auto
</style>