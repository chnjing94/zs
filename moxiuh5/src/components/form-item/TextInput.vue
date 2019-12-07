<template>
  <div id="test-input">
    <div class="hint">
      <div class="main-hint">
        <span style="color: red" v-if="required">*</span>{{title}}
      </div>
      <div class="sub-hint" v-if="hint">
        <span style="color: #868686">{{hint}}</span>
      </div>
    </div>
    <div class="test-area">
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
    padding 0.5rem 1rem
  
  .hint
    flex 1 0 auto
    display flex
    align-items flex-start
    .main-hint
      flex 0 0 auto
      font-weight 600
    .sub-hint
      flex 1 1 auto

  .test-area
    flex 1 0 2rem
    display flex
    align-items center
  
</style>