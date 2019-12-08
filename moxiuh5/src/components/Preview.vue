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
        backgroundLongImg: state => state.backgroundLongImg
    }),
    backgroundLongImgStyle () {
      return {
        backgroundImage: 'url(' + this.backgroundLongImg.backgroundImgUrlRel + ')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }
      
    }
  }
}
</script>

<style scoped>
#background-long-img {
  width: 375px;
  height: 1328px;
  background-color: white;
}
</style>