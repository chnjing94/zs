<template>
  <div id="guide-icon" v-if="refresh">
    <Title :title="'引导图标'"/>
    <ImageUploader :preferSize="'175*50px'" :imgPrefix="'GuideIcon'+bannerId" :required="false" @success="uploadImageSuccess"/>
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
    bannerId: {
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
      refresh: true,
      showValidationMsg: false,
      editing: false,
      
      guideIconUrl: '',
      guideIconUrlRel: ''
    }
  },
  watch: {
    output () {
      this.editing = true
    }
  },
  computed: {
    output () {
      const { guideIconUrl, guideIconUrlRel } = this
      return {
        payload: { guideIconUrl, guideIconUrlRel },
        n: this.bannerId
      }
    },
  },
  methods: {      
    uploadImageSuccess (res) {
      this.guideIconUrl = res.data.AbsPath
      this.guideIconUrlRel = res.data.RelativePath
      this.commit({
        payload: {guideIconUrlRel: res.data.RelativePath },
        n: this.bannerId
      })
    },
    commit (payload) {
      this.$store.commit('changeFiveBannersGuideIcon', payload ? payload : this.output)
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
    reset () {
      this.guideIconUrl = '',
      this.guideIconUrlRel = ''
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
  #guide-icon
    display flex
    flex-direction column
</style>