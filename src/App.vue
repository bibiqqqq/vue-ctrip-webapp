<template>
  <div id="app">
    <tabbar class="tabbar"></tabbar>
      <router-view/>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar'
export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tabbar
    position fixed
    bottom 0
    left 0
    z-index 200
    background #fff
</style>
