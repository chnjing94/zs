<template>
  <div id="banner-subtitle">
    <Title :title="'分区副标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入副标题文字'" :hint="'（支持12位字符、中文汉字和英文输入，超过展示区域手机端不展示）'" :maxLength="12" v-model="text"/>
    <FontColor v-model="fontColor"/>
    <ButtonGroup :success="!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import FontColor from '../form-item/FontColor'

export default {
  name: 'BannerSubtitle',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    FontColor
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,

      text: '',
      fontSize: 13,
      fontColor: '#000000'
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { text, fontSize, fontColor } = this
      return { text, fontSize, fontColor }
    },
  },
  methods: {
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
  #banner-subtitle
    display flex
    flex-direction column
</style>