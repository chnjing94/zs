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
      <a-input :placeholder="placeholder" @change="onInputChanged" v-model="value"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
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
    }
  },
  data () {
    return {
      value: '',
    }
  },
  methods: {
    onInputChanged () {
      this.value = this.value.slice(0, 20)
      this.$emit('change', this.value)
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