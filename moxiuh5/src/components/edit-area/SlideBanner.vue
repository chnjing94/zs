<template>
  <div id="slide-banner">
    <Title :title="title" :subtitle="subtitle"/>
    <div v-for="(banner,index) in data.banners" :key="index" @click="selectBanner(index)">
      <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required/>
      <ImageUploader :title="'背景图片'+(index+1)" :imgPrefix="'SlideBannerBG'" :preferSize="'502*224px'" :required="false"/>
      <BackgroundColor :title="'背景颜色'+(index+1)"/>
      <ImageUploader :title="'引导图标'+(index+1)" :imgPrefix="'SlideBannerGuide'" :preferSize="'72x72px'" :required="false"/>
      <TextInput :title="'主标题'" :hint="'（支持16位中文汉字和英文输入，超过展示区域文字的内容不在手机端展示）'" :placeholder="'请输入主标题文字'"/>
      <FontColor />
      <TextInput :title="'副标题'" :hint="'（支持7位中文汉字和英文输入输入，超过7位不展示）'" :placeholder="'请输入副标题文字'"/>
      <FontColor />
      <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" required/>
      <RedictWay />
      <div class="edit-button">
        <div class="button add" v-if="index==data.banners.length-1" @click="addBanner"><a-icon type="plus" /></div>
        <div class="button delete" @click="deleteBanner(index)"><a-icon type="minus" /></div>
      </div>
    </div>
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
import RedictWay from '../widgets/RedictWay'

export default {
  name: 'SlideBanner',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    FontColor,
    ImageUploader,
    BackgroundColor,
    RedictWay
  },
  data () {
    return {
      title: '滑动banner图',
      subtitle: '配置多张可滑动，5秒自动切换，最多可配置5张',
      editCounter: 0,
      currentBannerIndex: -1,
      data: {
        banners: [
          {
            "componentName": "banner1",
            "backgroundImgUrl": "广告.png",
            "backgroundColor": "",
            "backgroundOpacity": 1,
            "guideIconUrl": "go.png",
            "title": "参与竞猜 赢取超大奖励",
            "fontColor": "black",
            "subtitle": "中奖可获得999元红包",
            "subtitleFontColor": "black",
            "link": "http://",
            "way": 0
          }
        ]
      }
    }
  },
  methods: {
    addBanner () {
      if (this.data.banners.length >=5) {
        return
      }
      this.data.banners.push({
        "componentName": "",
        "backgroundImgUrl": "",
        "backgroundColor": "",
        "backgroundOpacity": 0,
        "guideIconUrl": "",
        "title": "",
        "fontColor": "#000000",
        "subtitle": "",
        "subtitleFontColor": "#000000",
        "link": "",
        "way": 0
      })
    },
    deleteBanner (index) {
      this.data.banners.splice(index, 1)
      if (this.data.banners.length == 0) {
        this.addBanner()
      }
    },
    selectBanner (index) {
      this.currentBannerIndex = index
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
  
  .edit-button
    display flex
    justify-content center
    margin 0.5rem 1rem
    border-top solid 2px #007D71
    height 1.5rem
    .button
      flex 0 0 15%
      border solid 1px #007D71
      border-top 0px
      display flex
      justify-content center
      align-items center
      cursor pointer
    .add
      background-color #007D71
      &:hover
        opacity 0.8
      // border-bottom-left-radius: 0.5em;
      color white
    .delete
      &:hover
        background-color rgb(226, 243, 241)
      // border-bottom-right-radius: 0.5em;
</style>