<template>
  <div id="fixed-banner">
    <Title :title="'固定banner图'"/>
    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required/>
    <ImageUploader :imgPrefix="'FixedBanner'" :preferSize="'640*140px'"/>
    <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" required/>
    <RedictWay />
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import TextInput from '../widgets/TextInput'
import ImageUploader from '../widgets/ImageUploader'
import RedictWay from '../widgets/RedictWay'

export default {
    name: 'FixedBanner',
    components: {
      Title,
      ButtonGroup,
      TextInput,
      ImageUploader,
      RedictWay
    },
    data () {
      return {
        editCounter: 0
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
  #fixed-banner
    display flex
    flex-direction column
</style>