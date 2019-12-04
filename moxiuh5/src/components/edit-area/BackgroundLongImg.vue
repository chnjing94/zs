<template>
  <div id="background-long-img-wrapper">
    <Title />
    <ImageUploader />
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
  }
}
</script>

<style scoped>
  #background-long-img-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>