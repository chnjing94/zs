<template>
  <div id="banner-subtitle">
    <Title :title="'分区副标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入副标题文字'" :hint="'（支持12位字符、中文汉字和英文输入，超过展示区域手机端不展示）'"/>
    <FontColor />
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import TextInput from '../widgets/TextInput'
import FontColor from '../widgets/FontColor'

export default {
    name: 'BannerSubtitle',
    components: {
      Title,
      ButtonGroup,
      TextInput,
      FontColor
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
  #banner-subtitle
    display flex
    flex-direction column
</style>