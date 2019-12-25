<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  methods: {
    handleMessage (event) {
      try {
        if (!event.data) {
          return false
        }
        const json = JSON.parse(event.data)
        this.$store.commit('loadData', json)
        this.$store.commit('save')
        this.$store.commit('saveOrgImgList', this.$store.getters.getImgList)
        this.$store.commit("modifyStatus", this.getStatus("opr") !== "1");
        this.getResPath()
      }
      catch(e) {
        return
      }
    },
    getStatus: function(name){
        var url = "?" + window.parent.location.href.split("?")[1];
        return  decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [""])[1].replace(/\+/g, '%20')) || "";
    },
    getResPath () {
      const resPath = window.parent.document.getElementById('resPath').value
      if (resPath) {
        this.$store.commit('changeResPath', resPath)
      }
    }
  },
  mounted() {
    this.$store.commit('save')
    window.addEventListener('message', this.handleMessage)
    this.getResPath()
  },
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
  }
</style>
