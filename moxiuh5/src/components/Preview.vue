<template>
  <div id="background-long-img" :style="backgroundLongImgStyle" @click="onClick">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Preview',
  data () {
    return {

    }
  },
  methods: {
    onClick () {
      this.$store.dispatch('changeBackgroundLongImg', '../image/背景.png')
    }
  },
  computed: {
    ...mapState({
        backgroundLongImgStyle: state => state.backgroundLongImgStyle
    }),
  }
}
</script>

<style scoped>
#background-long-img {
  width: 750px;
  height: 2656px;
}
</style>