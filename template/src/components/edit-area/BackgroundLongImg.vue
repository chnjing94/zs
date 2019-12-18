<template>
  <div id="background-long-img-wrapper">
    <Title :title="'背景长图'"/>
    <ImageUploader :imgPrefix="'BackgroundLongImg'" :fileName="backgroundImgName" @success="uploadImageSuccess" @remove="removeImg"/>
    <ErrorMsg :message="validteBackgroundImg" v-if="showValidationMsg&&validteBackgroundImg"/>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
      
      backgroundImgName: '',
      backgroundImgUrlRel: '',
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
    confirm () {
      if (this.validated) {
        this.$store.commit('save')
        this.$store.commit('changeEditArea', '')
      }
      this.showValidationMsg = true
    },
    cancel () {
      this.$store.commit('rollback')
      this.$store.commit('changeEditArea', '')
    },
    commit (payload) {
      this.$store.commit('changeBackgroundLongImg', payload)
    },
  },
  watch: {
    backgroundImgUrlRel () {
      this.commit({ backgroundImgUrlRel: this.backgroundImgUrlRel, backgroundImgName: this.backgroundImgName })
    },
  },
  computed: {
    ...mapState({
      backgroundLongImg: state => state.backgroundLongImg,
    }),
    validteBackgroundImg () {
      const error = !this.backgroundImgUrlRel ? '必填项不能为空' : ''
      return error
    },
    validated () {
      return !this.validteBackgroundImg
    }
  },
  created () {
    this.backgroundImgName = this.backgroundLongImg.backgroundImgName
    this.backgroundImgUrlRel = this.backgroundLongImg.backgroundImgUrlRel
  }
}
</script>

<style scoped lang="stylus">
  #background-long-img-wrapper
    display flex
    flex-direction column
    padding 0 15px 20px
</style>