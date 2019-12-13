<template>
  <div id='content'>
    <header />
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
  display: flex;
  flex-direction: column;
  min-width: 1350px;
}

header {
  flex: 0 0 50px;
  background-color: rgb(0, 125, 113);
}

main {
  background-color: rgb(235, 241, 241);
  display: flex;
  justify-content: center;
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
  flex: 1 0 auto;
  overflow-y: scroll;
}

footer {
  flex: 0 0 50px;
  border-top: solid 1px rgb(223, 223, 223);
}
</style>
