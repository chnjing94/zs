<template>
  <div id="background-long-img-wrapper">
    <Title :title="'背景长图'"/>
    <ImageUploader :imgPrefix="'BackgroundLongImg'" @success="uploadImageSuccess" />
    <ErrorMsg :message="validteBackgroundImg" v-if="validteBackgroundImg&&showValidationMsg"/>
    <ButtonGroup :success="validated&&!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import ImageUploader from '../form-item/ImageUploader'
import ErrorMsg from '../form-item/ErrorMsg'
import { mapState } from 'vuex'

export default {
  name: 'BackgroundLongImg',
  components: {
    ButtonGroup,
    ImageUploader,
    Title,
    ErrorMsg
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,

      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
    }
  },
  methods: {
    uploadImageSuccess (res) {
      this.backgroundImgUrl = res.data.AbsPath
      this.backgroundImgUrlRel = res.data.RelativePath
      this.commit({ backgroundImgUrlRel: res.data.RelativePath })
    },
    confirm () {
      if (this.validated) {
        this.commit()
      }
      this.showValidationMsg = true
      this.editing = false
    },
    cancel () {
      this.reset()
      this.commit()
      this.showValidationMsg = false
      this.editing = false
    },
    reset (data) {
      this.backgroundImgUrl = data ? data.backgroundImgUrl : '',
      this.backgroundImgUrlRel = data ? data.backgroundImgUrl : ''
    },
    commit (payload) {
      this.$store.commit('changeBackgroundLongImg', payload ? payload : this.output)
    },
  },
  watch: {
    output () {
      this.editing = true
    },
    dataLoaded () {
      if (this.dataLoaded) {
        this.reset(this.backgroundLongImg)
      }
    }
  },
  computed: {
    ...mapState({
      dataLoaded: state => state.dataLoaded,
      backgroundLongImg: state => state.backgroundLongImg,
    }),
    output () {
      const { backgroundImgUrl, backgroundImgUrlRel } = this
      return { backgroundImgUrl, backgroundImgUrlRel }
    },
    validteBackgroundImg () {
      const error = (!this.backgroundImgUrl || !this.backgroundImgUrlRel) ? '必填项不能为空' : ''
      return error
    },
    validated () {
      return !this.validteBackgroundImg
    }
  }
}
</script>

<style scoped lang="stylus">
  #background-long-img-wrapper
    display flex
    flex-direction column
</style>