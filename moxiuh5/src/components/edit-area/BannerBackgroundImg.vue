<template>
  <div id="banner-background-img" v-if="refresh">
    <Title :title="'banner图背景'"/>
    <TextInput :title="'组件名称'" :placeholder="'请输入组件名称'" required noSymbol :maxLength="16" v-model="componentName"/>
    <ErrorMsg :message="validateComponentName" v-if="validateComponentName&&showValidationMsg"/>

    <ImageUploader :title="'背景图片'" :imgPrefix="'BannerBackgroundImg'+bannerId" :preferSize="'468*60px'" :required="false" @success="uploadImageSuccess"/>
    <BackgroundColor v-model="backgroundColor" :opacity.sync="backgroundOpacity"/>
    <TextInput :title="'跳转链接'" :hint="'（必须一些http://或https://开始）'" :placeholder="'点击输入链接'" required v-model="link"/>
    <ErrorMsg :message="validteLink" v-if="validteLink&&showValidationMsg"/>

    <RedictWay v-model="way"/>
    <ButtonGroup :success="validated&&!editing&&showValidationMsg" @buttonConfirmed="confirm" @buttonCanceled="cancel"/>
  </div>
</template>

<script>
import Title from '../form-item/Title'
import ButtonGroup from '../form-item/ButtonGroup'
import TextInput from '../form-item/TextInput'
import ImageUploader from '../form-item/ImageUploader'
import BackgroundColor from '../form-item/BackgroundColor'
import RedictWay from '../form-item/RedictWay'
import ErrorMsg from '../form-item/ErrorMsg'
import { mapState } from 'vuex'

export default {
  name: 'BannerBackgroundImg',
  props: {
    bannerId: {
      type: String,
      required: true
    }
  },
  components: {
    Title,
    ButtonGroup,
    TextInput,
    ImageUploader,
    RedictWay,
    BackgroundColor,
    ErrorMsg
  },
  data () {
    return {
      refresh: true,
      showValidationMsg: false,
      editing: false,
      
      componentName: '',
      backgroundImgUrl: '',
      backgroundImgUrlRel: '',
      backgroundColor: '',
      backgroundOpacity: 0,
      link: '',
      way: 0
    }
  },
  watch: {
    output () {
      this.editing = true
    },
    dataLoaded () {
      if (this.dataLoaded) {
        this.reset(this.fiveBanners[this.bannerId].banner)
      }
    }
  },
  computed: {
    ...mapState({
      dataLoaded: state => state.dataLoaded,
      fiveBanners: state => state.fiveBanners,
    }),
    output () {
      const { componentName, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, link, way } = this
      return { 
        payload: { componentName, backgroundImgUrl, backgroundImgUrlRel, backgroundColor, backgroundOpacity, link, way },
        n: this.bannerId
      }
    },    
    validateComponentName () {
      const error = !this.componentName ? '必填项不能为空' : ''
      return error
    },    
    validteLink () {
      let error = ''
      if (!this.link) {
        error = '必填项不能为空'
      } else if (!this.link.startsWith('http://') && !this.link.startsWith('https://')) {
        error = '请输入正确的跳转链接'
      }
      return error
    },
    validated () {
      return !this.validateComponentName && !this.validteLink
    }
  },
  methods: {
    uploadImageSuccess (res) {
      this.backgroundImgUrl = res.data.AbsPath
      this.backgroundImgUrlRel = res.data.RelativePath
      this.commit({ payload: { backgroundImgUrlRel: res.data.RelativePath }, n: this.bannerId })
    },
    commit (payload) {
      this.$store.commit('changeFiveBannersBackground', payload ? payload : this.output)
    },
    confirm () {
      if (this.validated) {
        this.commit()
      }
      this.showValidationMsg = true
      this.editing = false
    },
    cancel () {
      this.reset()
      this.commit()
      this.rerender()
      this.showValidationMsg = false
      this.editing = false
    },
    reset (data) {
      this.componentName = data ? data.componentName : '',
      this.backgroundImgUrl = data ? data.backgroundImgUrl : '',
      this.backgroundImgUrlRel = data ? data.backgroundImgUrlRel : '',
      this.backgroundColor = data ? data.backgroundColor : '',
      this.backgroundOpacity = data ? data.backgroundOpacity : 0,
      this.link = data ? data.link : '',
      this.way = data ? data.way : 0
    },
    rerender () {
      this.refresh= false
      this.$nextTick(()=>{
        this.refresh = true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  #banner-background-img
    display flex
    flex-direction column
    padding 0 15px 20px
</style>