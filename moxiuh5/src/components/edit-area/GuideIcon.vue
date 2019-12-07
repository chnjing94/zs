<template>
  <div id="guide-icon">
    <Title :title="'引导图标'"/>
    <ImageUploader :preferSize="'175*50px'" :imgPrefix="'GuideIcon'" :required="false" @success="uploadImageSuccess"/>
    <ButtonGroup :success="!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import ImageUploader from '../form-item/ImageUploader'

export default {
  name: 'GuideIcon',
  props: {
    guideIconId: {
      type: String,
      required: true
    }
  },
  components: {
    Title,
    ButtonGroup,
    ImageUploader
  },
  data () {
    return {
      showValidationMsg: false,
      editing: false,
      
      guideIconUrl: '',
      guideIconUrlRel: ''
    }
  },
  watch: {
    listenChange () {
      this.editing = true
    }
  },
  computed: {
    listenChange () {
      const { guideIconUrl, guideIconUrlRel } = this
      return { guideIconUrl, guideIconUrlRel }
    },
  },
  methods: {      
    uploadImageSuccess (res) {
      this.guideIconUrl = res.data.AbsPath
      this.guideIconUrlRel = res.data.RelativePath
    },
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
  #guide-icon
    display flex
    flex-direction column
</style>