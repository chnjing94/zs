<template>
  <div id="guide-icon">
    <Title :title="'引导图标'"/>
    <ImageUploader :fileName="guideIconName" :preferSize="'175*50'" :imgPrefix="'GuideIcon'+bannerId" :required="false" @success="uploadImageSuccess" @remove="removeImg" :disable="!allowEdit"/>
    <ButtonGroup v-if="allowEdit" :success="confirmed" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
      confirmed: false,

      guideIconName: '',
      guideIconUrlRel: ''
    }
  },
  watch: {
    output () {
      this.commit()
      this.confirmed = false
    },
    bannerId () {
      this.load()
    }
  },
  computed: {
    ...mapState({
      allowEdit: state => state.state,
      fiveBanners: state => state.fiveBanners,
    }),
    output () {
      const { guideIconName, guideIconUrlRel } = this
      return {
        payload: { guideIconName, guideIconUrlRel },
        n: this.bannerId
      }
    },
  },
  methods: {      
    uploadImageSuccess (res) {
      this.guideIconName = res.fileName
      this.guideIconUrlRel = res.data.RelativePath
    },
    removeImg () {
      this.guideIconName = ''
      this.guideIconUrlRel = ''
    },
    commit () {
      this.$store.commit('changeFiveBannersGuideIcon', this.output)
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
      const data = this.fiveBanners[this.bannerId]
      this.guideIconName = data.guideIconName,
      this.guideIconUrlRel = data.guideIconUrlRel
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped lang="stylus">
  #guide-icon
    display flex
    flex-direction column
    padding 0 15px 20px
</style>