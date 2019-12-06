<template>
  <div id="guide-icon">
    <Title :title="'引导图标'"/>
    <ImageUploader :preferSize="'175*50px'" :imgPrefix="'GuideIcon'" :required="false"/>
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import ImageUploader from '../widgets/ImageUploader'

export default {
    name: 'GuideIcon',
    components: {
      Title,
      ButtonGroup,
      ImageUploader
    },
    data () {
      return {
        editCounter: 0,
      }
    },
    methods: {
      confirm () {
        window.console.log('Confirm')
      },
      cancel () {
        window.console.log('Cancel')
      }
    }
}
</script>

<style scoped lang="stylus">
  #guide-icon
    display flex
    flex-direction column
</style>