<template>
  <div id='content'>
    <main>
      <div id="left-panel"><LeftPannel /></div>
      <div id="preview"><Preview /></div>
      <div id="right-panel"><RightPanel /></div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Preview from './Preview'
import RightPanel from './RightPanel'
import LeftPannel from './LeftPanel'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Preview,
    RightPanel,
    LeftPannel,
    Footer
  }
}
</script>

<style scoped>
#content {
  min-width: 1350px;
}

main {
  background-color: rgb(235, 241, 241);
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

#left-panel {
  flex: 2 0 auto;
}

#preview {
  flex: 0 0 393px;
  margin-top: 0.5rem;
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
}

#right-panel {
  flex: 1 0 450px;
  overflow-y: scroll;
}

footer {
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 50px;
  border-top: solid 1px rgb(223, 223, 223);
  z-index: 3;
}
</style>
