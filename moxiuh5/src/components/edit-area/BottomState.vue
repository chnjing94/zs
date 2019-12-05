<template>
  <div id="bottom-state">
    <Title v-bind:title="title"/>
    <SimpleText />
    <ButtonGroup v-bind:editCounter="editCounter" @buttonConfirmed="confirm" @buttonCanceled="cancel" />
  </div>
</template>

<script>
import Title from '../widgets/Title'
import ButtonGroup from '../widgets/ButtonGroup'
import SimpleText from '../widgets/SimpleText'

export default {
    name: 'BottomState',
    components: {
      Title,
      ButtonGroup,
      SimpleText
    },
    data () {
      return {
        title: '底部说明',
        editCounter: 0,
      }
    },
    methods: {
      confirm () {
        window.console.log('Confirm')
      },
      cancel () {
        window.console.log('Cancel')
      }
    }
}
</script>

<style scoped lang="stylus">
  #bottom-state
    display flex
    flex-direction column
</style>