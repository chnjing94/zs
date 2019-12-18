<template>
  <div id="bottom-state">
    <Title :title="'底部说明'"/>
    <TextInput :title="'文字'" :placeholder="'请输入文字'" :hint="'（支持20位字符、中文汉字和英文输入，超过展示区手机端不展示）'" v-model="text" :maxLength="20"/>
    <FontSize v-model="fontSize"/>
    <FontColor v-model="fontColor"/>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel"/>
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import FontSize from '../form-item/FontSize'
import FontColor from '../form-item/FontColor'
import { mapState } from 'vuex'

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
      text: '',
      fontSize: 0,
      fontColor: '',
    }
  },
  watch: {
    output () {
      this.commit()
    }
  },
  computed: {
    ...mapState({
      footText: state => state.footText,
    }),
    output () {
      const { text, fontSize, fontColor } = this
      return { text, fontSize, fontColor }
    },
  },
  methods: {
    commit () {
      this.$store.commit('changeFootText', this.output)
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
    const data = this.footText
    this.text = data.text,
    this.fontSize = data.fontSize,
    this.fontColor = data.fontColor
  }
}
</script>

<style scoped lang="stylus">
  #bottom-state
    display flex
    flex-direction column
    padding 0 15px 20px
</style>