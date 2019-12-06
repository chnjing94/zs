<template>
  <div id="subtitle-wrapper">
    <Title :title="'副标题'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'540*60px'" :imgPrefix="'Subtitle'" :required="false"/>
    <BackgroundColor />
    <TextInput :title="'文字'" :placeholder="'请输入副标题文字'" :hint="'（支持最多16位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'"/>
    <FontSize :defaultSize="24"/>
    <FontColor />
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import TextInput from '../widgets/TextInput'
import FontSize from '../widgets/FontSize'
import FontColor from '../widgets/FontColor'
import ImageUploader from '../widgets/ImageUploader'
import BackgroundColor from '../widgets/BackgroundColor'

export default {
    name: 'Subtitle',
    components: {
      Title,
      ButtonGroup,
      TextInput,
      FontSize,
      FontColor,
      ImageUploader,
      BackgroundColor
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
  #subtitle-wrapper
    display flex
    flex-direction column
</style>