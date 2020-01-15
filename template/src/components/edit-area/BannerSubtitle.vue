<template>
  <div id="banner-subtitle">
    <Title :title="'分区副标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入副标题文字'" :hint="'（限12个字以内输入）'" :maxLength="12" v-model="text" :disable="!allowEdit"/>
    <FontColor v-model="fontColor" :disable="!allowEdit"/>
    <ButtonGroup v-if="allowEdit" :success="confirmed" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import FontColor from '../form-item/FontColor'
import { mapState } from 'vuex'

export default {
  name: 'BannerSubtitle',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    FontColor
  },
  props: {
    bannerId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      confirmed: false,

      text: '',
      fontSize: 0,
      fontColor: ''
    }
  },
  watch: {
    output () {
      this.commit()
      this.confirmed = false
    },
  },
  computed: {
    ...mapState({
      allowEdit: state => state.state,
      fiveBanners: state => state.fiveBanners,
    }),
    output () {
      const { text, fontSize, fontColor } = this
      return {
        payload: { text, fontSize, fontColor },
        n: this.bannerId
      }
    },
  },
  methods: {
    commit () {
      this.$store.commit('changeFiveBannersSubtitle', this.output)
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
      const data = this.fiveBanners[this.bannerId].subtitle
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
  #banner-subtitle
    display flex
    flex-direction column
    padding 0 15px 20px
</style>