<template>
  <div id="guide-icon">
    <Title :title="'引导图标'"/>
    <ImageUploader :fileName="guideIconName" :imgPrefix="'GuideIcon'+bannerId" :required="false" @success="uploadImageSuccess" @remove="removeImg"/>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel" />
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
      guideIconName: '',
      guideIconUrlRel: ''
    }
  },
  watch: {
    output () {
      this.commit()
    },
    bannerId () {
      this.load()
    }
  },
  computed: {
    ...mapState({
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
      this.$store.commit('changeEditArea', '')  
    },
    cancel () {
      this.$store.commit('rollback')
      this.$store.commit('changeEditArea', '')
    },
    load () {
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