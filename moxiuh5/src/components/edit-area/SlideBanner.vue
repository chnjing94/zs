<template>
  <div id="slide-banner">
    <Title :title="title" :subtitle="subtitle"/>
    <ComponentName @componentNameChanged="saveComponentName"/>
    <ImageUploader :picTitle="'背景图片'" :imgPrefix="'SlideBannerBG'" :picSize="'502*224px'" :required="false"/>
    <BackgroundColor />
    <ImageUploader :picTitle="'引导图标'" :imgPrefix="'SlideBannerGuide'" :picSize="'72x72px'" :required="false"/>
    <SimpleText />
    <FontSize />
    <FontColor />
    <ButtonGroup v-bind:editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import SimpleText from '../widgets/SimpleText'
import FontColor from '../widgets/FontColor'
import ComponentName from '../widgets/ComponentName'
import ImageUploader from '../widgets/ImageUploader'
import BackgroundColor from '../widgets/BackgroundColor'

export default {
  name: 'SlideBanner',
  components: {
    Title,
    ButtonGroup,
    SimpleText,
    FontColor,
    ComponentName,
    ImageUploader,
    BackgroundColor
  },
  data () {
    return {
      title: '滑动banner图',
      subtitle: '配置多张可滑动，5秒自动切换，最多可配置5张',
      editCounter: 0,
    }
  },
  methods: {
    saveComponentName () {

    },
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
  #slide-banner
    display flex
    flex-direction column
</style>