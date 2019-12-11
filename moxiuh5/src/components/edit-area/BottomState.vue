<template>
  <div id="bottom-state" v-if="refresh">
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
      refresh: true,
      showValidationMsg: false,
      editing: false,

      text: '',
      fontSize: 16,
      fontColor: '#000000',
    }
  },
  watch: {
    output () {
      this.editing = true
    },
    dataLoaded () {
      if (this.dataLoaded) {
        this.reset(this.footText)
      }
    }
  },
  computed: {
    ...mapState({
      dataLoaded: state => state.dataLoaded,
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
  #bottom-state
    display flex
    flex-direction column
</style>