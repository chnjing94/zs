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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(20, 5vh);
  margin: 0 auto;
  min-width: 1350px;
}

header {
  background-color: rgb(0, 125, 113);
  grid-row-start: 1;
  grid-row-end: 2;
}

main {
  background-color: rgb(235, 241, 241);
  grid-row-start: 2;
  grid-row-end: 20;
  display: flex;
  justify-content: center;
}

#left-panel {
  flex: 2 0 auto;
}

#preview {
  flex: 0 0 390px;
  margin-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

#right-panel {
  flex: 1 0 auto;
  overflow-y: scroll;
}

footer {
  border-top: solid 1px rgb(223, 223, 223);
  grid-row-start: 20;
  grid-row-end: 21;
}
</style>
