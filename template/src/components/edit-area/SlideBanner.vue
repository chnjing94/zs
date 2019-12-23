<template>
  <div id="slide-banner">
    <Title :title="'滑动banner图'" :subtitle="'配置多张可滑动，5秒自动切换，最多可配置5张'"/>
    <div class="form">
      <div v-for="(banner,index) in banners" :key="index" @click="selectBanner(index)" :class="{delete: index===deleteIndex}">
        <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required noSymbol :maxLength="16" v-model="banner.componentName"/>
        <ErrorMsg :message="validateComponentName(index)" v-if="validateComponentName(index)&&showValidationMsg"/>

        <ImageUploader :title="'背景图片'+(index+1)" :fileName="banner.backgroundImgName" :imgPrefix="'SlideBannerBG'" :required="false" @success="uploadImageSuccess" @remove="removeBackgroundImg(banner)"/>
        <BackgroundColor :title="'背景颜色'+(index+1)" v-model="banner.backgroundColor" :opacity.sync="banner.backgroundOpacity"/>
        <ImageUploader :title="'引导图标'+(index+1)" :fileName="banner.guideIconName" :imgPrefix="'SlideBannerGuide'" :required="false" @success="uploadGuideIconSuccess" @remove="removeIconImg(banner)"/>
        <TextInput :title="'主标题'" :hint="'（限7个字以内输入）'" :placeholder="'请输入主标题文字'" noSymbol :maxLength="7" v-model="banner.title"/>
        <FontColor v-model="banner.fontColor"/>
        <TextInput :title="'副标题'" :hint="'（限7个字以内输入）'" :placeholder="'请输入副标题文字'" noSymbol :maxLength="7" v-model="banner.subtitle"/>
        <FontColor v-model="banner.subtitleFontColor"/>
        <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" required v-model="banner.link"/>
        <ErrorMsg :message="validateLink(index)" v-if="validateLink(index)&&showValidationMsg"/>
        <RedictWay v-model="banner.way"/>
        <div class="edit-button">
          <div class="button add" v-if="index==banners.length-1" @click="addBanner"><a-icon type="plus" /></div>
          <div class="button delete" @click="deleteBanner(index)"><a-icon type="minus" /></div>
        </div>
      </div>
    </div>
    <ButtonGroup @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import FontColor from '../form-item/FontColor'
import ImageUploader from '../form-item/ImageUploader'
import BackgroundColor from '../form-item/BackgroundColor'
import RedictWay from '../form-item/RedictWay'
import ErrorMsg from '../form-item/ErrorMsg'
import { mapState } from 'vuex'

export default {
  name: 'SlideBanner',
  components: {
    Title,
    ButtonGroup,
    TextInput,
    FontColor,
    ImageUploader,
    BackgroundColor,
    RedictWay,
    ErrorMsg
  },
  data () {
    return {
      showValidationMsg: false,

      currentBannerIndex: 0,
      deleteIndex: '',
      banners: []
    }
  },
  watch: {
    output () {
      this.commit()
    }
  },
  computed: {
    ...mapState({
      slideBanner: state => state.slideBanner
    }),
    output () {
      const { banners } = this
      return { ...banners[0], ...banners[1], ...banners[2], ...banners[3], ...banners[4] }
    },
    validateAllComponentName () {
      let success = true
      this.banners.forEach(banner => {
        if (!banner.componentName) {
          success = false
        }
      });
      return success
    },
    validateAllLink () {
      let success = true
      this.banners.forEach(banner => {
        if (!banner.link || (!banner.link.startsWith('http://') && !banner.link.startsWith('https://'))) {
          success = false
        } 
      });
      return success
    },
    validated () {
      return this.validateAllComponentName && this.validateAllLink
    }
  },
  methods: {
    validateComponentName (index) {
      const error = !this.banners[index].componentName ? '必填项不能为空' : ''
      return error
    },
    validateLink (index) {
      const link = this.banners[index].link
      let error = ''
      if (!link) {
        error = '必填项不能为空'
      } else if (!link.startsWith('http://') && !link.startsWith('https://')) {
        error = '请输入正确的跳转链接'
      }
      return error
    },
    uploadGuideIconSuccess (res) {
      const index = this.currentBannerIndex
      this.banners[index].guideIconName = res.fileName
      this.banners[index].guideIconUrlRel = res.data.RelativePath
    },
    uploadImageSuccess (res) {
      const index = this.currentBannerIndex
      this.banners[index].backgroundImgName = res.fileName
      this.banners[index].backgroundImgUrlRel = res.data.RelativePath
    },
    removeBackgroundImg (banner) {
      banner.backgroundImgName = '',
      banner.backgroundImgUrlRel = ''
    },
    removeIconImg (banner) {
      banner.guideIconName = '',
      banner.guideIconUrlRel = ''
    },
    commit () {
      this.$store.commit('changeSlideBanner', this.banners )
    },
    addBanner () {
      if (this.banners.length >=5) {
        return
      }
      this.banners.push({
        "componentName": "",
        "backgroundImgName": "",
        "backgroundImgUrlRel": "",
        "backgroundColor": "",
        "backgroundOpacity": 0,
        "guideIconName": "",
        "guideIconUrlRel": "",
        "title": "",
        "titleFontSize": 16,
        "fontColor": "#000000",
        "subtitle": "",
        "subtitleFontSize": 14,
        "subtitleFontColor": "#000000",
        "link": "",
        "way": 0
      })
    },
    deleteBanner (index) {
      this.deleteIndex = index
      setTimeout(()=>{
        this.banners.splice(index, 1)
        this.deleteIndex = ''
        this.currentBannerIndex = 0
        this.$store.commit('setCurrentBannerIndex', 0 )
        if (this.banners.length === 0) {
          this.addBanner()
        }
      }, 600)

    },
    selectBanner (index) {
      if (index !== this.currentBannerIndex){
        this.currentBannerIndex = index
        this.$store.commit('setCurrentBannerIndex', index)
      }
    },
    confirm () {
      if (this.validated) {
        this.$store.commit('save')
        this.$store.commit('changeEditArea', '')      
        this.$store.commit('setCurrentBannerIndex', 0)
      }
      this.showValidationMsg = true
    },
    cancel () {
      this.$store.commit('rollback')
      this.$store.commit('changeEditArea', '')
      this.$store.commit('setCurrentBannerIndex', 0)
    }
  },
  mounted () {
    this.banners = this.slideBanner.banners
  }
}
</script>

<style scoped lang="stylus">
  #slide-banner
    display flex
    flex-direction column
    padding 0 15px 20px

  .form
    max-height 500px
    overflow-x hidden
    overflow-y auto

  .delete
    animation: hide 0.5s;
  
  @keyframes hide{
    0%{ opacity: 1; }
    100%{ opacity: 0; }
  }
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
      opacity 0.8
      &:hover
        opacity 1
      color white
    .delete
      &:hover
        background-color rgb(226, 243, 241)
      // border-bottom-right-radius: 0.5em;
</style>