<template>
  <div id="bottom-state">
    <Title :title="'底部说明'"/>
    <TextInput :title="'文字'" :placeholder="'请输入文字'" :hint="'（限30个字以内输入）'" v-model="text" :maxLength="30" :disable="!allowEdit"/>
    <FontSize v-model="fontSize" :disable="!allowEdit"/>
    <FontColor v-model="fontColor" :disable="!allowEdit"/>
    <ButtonGroup v-if="allowEdit" :success="confirmed" @buttonConfirmed="confirm" @buttonCanceled="cancel"/>
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
      confirmed: false,

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
      this.confirmed = true
    },
    cancel () {
      this.$store.commit('rollback')
      this.load()
    },
    load () {
      this.confirmed = false
      const data = this.footText
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
  #bottom-state
    display flex
    flex-direction column
    padding 0 15px 20px
</style>