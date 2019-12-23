<template>
  <div id="test-input">
    <div class="hint" >
      <div class="main-hint" :style="{alignItems: highTitle ? '' : 'center'}">
        <span style="color: red" v-if="required">*</span>{{title}}
      </div>
      <div class="sub-hint" v-if="hint">
        <span style="color: #868686">{{hint}}</span>
      </div>
    </div>
    <div class="test-area" >
      <a-input :placeholder="placeholder" @change="onInputChanged" v-model="text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    hint: String,
    placeholder: {
      type: String,
      default: "请输入文字"
    },
    noSymbol: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  data () {
    return {
      text: this.value
    }
  },
  computed: {
    highTitle () {
      return this.title !== '跳转链接' && this.title !== '组件名称' 
    }
  },
  watch: {
    value () {
      this.text = this.value
    }
  },
  methods: {
    onInputChanged () {
      this.text = this.text.slice(0, this.maxLength)
      if (this.noSymbol) {
        this.text = this.text.replace(/[^a-zA-Z0-9\u4E00-\u9FA5]/g,'')
      }
      this.$emit('change', this.text)
    }
  }
}
</script>

<style scoped lang="stylus">
  #test-input
    display flex
    flex-direction column
    width 385px
    margin 5px 0
    padding 0px 0px 0px 5px

  .hint
    flex 1 0 auto
    width 356px
    display flex
    .main-hint
      flex 0 0 auto
      display flex
      align-items center
      height 40px
      font-weight 600
    .sub-hint
      display flex
      align-items center
      flex 1 1 auto
      height 40px

  .test-area
    flex 1 0 2rem
    width 356px
    display flex
    align-items center
  .ant-input
    height 40px
    padding 10px 25px 10px 10px
    border 1px solid #dbe3e8
</style>