<template>
  <div id="banner-title">
    <Title :title="'分区主标题'"/>
    <TextInput :title="'文字'" :placeholder="'请输入主标题文字'" :hint="'（支持12位字符、中文汉字和英文输入，超过7位不在手机端展示）'"/>
    <FontColor />
    <ImageUploader :title="'背景图片'" :preferSize="'250*50px'" :imgPrefix="'Subtitle'" :required="false"/>
    <BackgroundColor />
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
    name: 'BannerTitle',
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
  #banner-title
    display flex
    flex-direction column
</style>