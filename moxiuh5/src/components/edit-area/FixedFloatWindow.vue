<template>
  <div id="fixed-float-window">
    <Title :title="title"/>
    <ComponentName @componentNameChanged="saveComponentName"/>
    <ImageUploader :imgPrefix="imgPrefix" :picSize="picSize"/>
    <Link />
    <RedictWay />
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import ComponentName from '../widgets/ComponentName'
import ImageUploader from '../widgets/ImageUploader'
import Link from '../widgets/Link'
import RedictWay from '../widgets/RedictWay'

export default {
    name: 'FixedFloatWindow',
    components: {
      Title,
      ButtonGroup,
      ComponentName,
      ImageUploader,
      Link,
      RedictWay
    },
    data () {
      return {
        title: '固定悬浮窗',
        editCounter: 0,
        picSize: '建议160*145px尺寸的',
        imgPrefix: 'FixedFloatWindow',

        componentName: ''
      }
    },
    methods: {
      saveComponentName (payload) {
        this.componentName = payload
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
  #fixed-float-window
    display flex
    flex-direction column
</style>