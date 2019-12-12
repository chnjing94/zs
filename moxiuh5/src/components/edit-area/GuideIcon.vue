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
import { mapState } from 'vuex'

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
    },
    dataLoaded () {
      if (this.dataLoaded) {
        this.reset(this.fiveBanners[this.bannerId])
      }
    }
  },
  computed: {
    ...mapState({
      dataLoaded: state => state.dataLoaded,
      fiveBanners: state => state.fiveBanners,
    }),
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
    reset (data) {
      this.guideIconUrl = data ? data.guideIconUrl : '',
      this.guideIconUrlRel = data ? data.guideIconUrlRel : ''
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
    padding 0 15px 20px
</style>