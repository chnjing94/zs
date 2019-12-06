<template>
  <div id="subregion-title">
    <Title :title="'分区标题'"/>
    <TextInput :title="'主标题'" :placeholder="'请输入主标题文字'" :hint="'（支持7位中文汉字和英文输入，超过展示区域手机端不展示不展示）'"/>
    <ImageUploader :title="'背景图片'" :preferSize="'240*60px'" :imgPrefix="'Subtitle'" :required="false"/>
    <FontColor />
    <BackgroundColor />
    <TextInput :title="'副标题'" :placeholder="'请输入副标题文字'" :hint="'（支持最多12位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'"/>
    <FontColor />
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import TextInput from '../widgets/TextInput'
import FontColor from '../widgets/FontColor'
import ImageUploader from '../widgets/ImageUploader'
import BackgroundColor from '../widgets/BackgroundColor'

export default {
    name: 'SubregionTitle',
    components: {
      Title,
      ButtonGroup,
      TextInput,
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
  #subregion-title
    display flex
    flex-direction column
</style>