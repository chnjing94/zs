<template>
  <div id="bottom-state">
    <Title :title="'底部说明'"/>
    <TextInput :title="'文字'" :placeholder="'请输入浮动文字'" :hint="'（支持20位字符、中文汉字和英文输入，超过展示区手机端不展示）'" v-model="text" :maxLength="20"/>
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

export default {
  name: 'BottomState',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    FontSize,
    FontColor
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,

      text: '',
      fontSize: 16,
      fontColor: '#000000',
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
  #bottom-state
    display flex
    flex-direction column
</style>