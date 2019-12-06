<template>
  <div id="background-long-img-wrapper">
    <Title :title="title"/>
    <ImageUploader :imgPrefix="imgPrefix" @uploadImgResponse="handleUploadImageResponse" />
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import ImageUploader from '../widgets/ImageUploader'

export default {
  name: 'BackgroundLongImg',
  components: {
    ButtonGroup,
    ImageUploader,
    Title
  },
  data () {
    return {
      title: '背景长图',
      imgPrefix: 'BackgroundLongImg',
      editCounter: 0,
    }
  },
  methods: {
    handleUploadImageResponse (res) {
      this.editCounter++
      this.$store.commit('changeBackgroundLongImg', res.data.RelativePath)
    },
    confirm () {
      window.console.log('Confirmed')
    },
    cancel () {
      window.console.log('Canceled')
      this.$store.commit('changeBackgroundLongImg', '')
    }
  }
}
</script>

<style scoped>
  #background-long-img-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>