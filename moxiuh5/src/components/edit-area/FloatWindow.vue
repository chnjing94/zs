<template>
  <div id="float-window">
    <Title :title="'浮动弹窗'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'540*60px'" :imgPrefix="'Subtitle'" :required="false"/>
    <BackgroundColor />
    <TextInput :title="'文字'" :hint="'（支持最多50位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'"/>
    <FontSize :defaultSize="16"/>
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
    name: 'FloatWindow',
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
  #float-window
    display flex
    flex-direction column
</style>