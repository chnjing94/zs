<template>
  <div id="background-long-img-wrapper">
    <Title />
    <ImageUploader v-bind:imgPrefix="'BackgroundLongImg'" @uploadImgResponse="handleUploadImageResponse" />
    <ButtonGroup />
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
  methods: {
    handleUploadImageResponse (res) {
      this.$store.commit('changeBackgroundLongImg', res.data.RelativePath)
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