<template>
  <div id="background-long-img" :style="backgroundLongImgStyle">
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
  width: 375px;
  height: 1328px;
}
</style>