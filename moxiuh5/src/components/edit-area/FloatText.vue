<template>
  <div id="float-text">
    <Title :title="'浮动文字'"/>
    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required/>
    <ImageUploader :title="'背景图片'" :imgPrefix="'FloatText'" :required="false"/>
    <BackgroundColor />
    <TextInput :title="'文字'" :placeholder="'请输入浮动文字'" :hint="'（支持最多16位中文汉字和英文输入，超过显示框的文字将不在手机端展示）'"/>
    <FontSize />
    <FontColor />
    <div class="show-text-toggle">
      <a-checkbox @change="onChange" defaultChecked>展示文字</a-checkbox><span style="color: #868686">（取消勾选后不展示该组件）</span>
    </div>
    <ButtonGroup :editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" :notes="notes"/>
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
    name: 'FloatText',
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
        notes: '1.浮动文字可输入领导寄语，支持拖拽调整位置，大小。2.带*为必须配置项，其余配置项无配置内容不展示相关组件',
        editCounter: 0,
      }
    },
    methods: {
      confirm () {
        window.console.log('Confirm')
      },
      cancel () {
        window.console.log('Cancel')
      },
      onChange () {

      }
    }
}
</script>

<style scoped lang="stylus">
  #float-text
    display flex
    flex-direction column

  .show-text-toggle
    padding 0.5rem 1rem

</style>